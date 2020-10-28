from flask import Blueprint, request, json
from app import app
from utils import verify_password, encodeToken, decodeToken
from datetime import datetime, timedelta
import jwt
from dateutil import parser


usersPasswordsDict = {
    "1111": "a0ec8ce1abc45985c92ce50d0871a4bc12c0c32aa48c62c76700dd381c6e7c771515e93061c859dd0e1050bd36a688f8b232accbba6387d88fe920ad0c4979029e56ab2dd2bd8601d441a2c76b0fcc04648673b46804a386c3954305e741a7f6",
    "2222": "cc133806097395bc44edc04ee3024c9e9108908096f222d370f8288455ece78147955662b192e51444df80a885dc568afc6789b10927473eb7b503cd1af4a71971a90bd75b946da0f2d1294f25efb37acaac152dc812e723361d5d4c59dc7d93",
    "3333": "518bc8b874f8cd6dd42378563047c6f25190bfcca0298fc9b11e6c521d7e114574f9489024171baf1f72b542de5f22f78d6242f611ebbc5035a0047ca4111eb99503e52576fe8dc980fa7eb7598dbddf7dc846535264902508093004da57c613"
}


@app.route('/sign_in', methods=['POST'])
def signIn():
    clientValues = request.get_json(force=True)

    if not clientValues or not verify_password(usersPasswordsDict[clientValues['userId']], clientValues['userPassword']):
        return 'not authunticated user', 401

    token = jwt.encode({
        'userId': clientValues['userId'],
        'exp': (datetime.now() + timedelta(minutes=60)).strftime("%Y-%m-%d %H:%M:%S"),
    }, '1')

    encodedToken = encodeToken(token)
    tokenAndDetails = json.dumps({'encodedToken': str(encodedToken),
                                  'userId':  clientValues['userId']})
    return tokenAndDetails


def get_userId_from_token(encodedToken):
    try:
        token = decodeToken(str(encodedToken))
    except Exception as e:
        return False

    tokenParameters = jwt.decode(token, '1')
    userId = tokenParameters['userId']
    expTime = tokenParameters['exp']

    if datetime.now() > parser.parse(expTime):
        return False
    if not userId in usersPasswordsDict:
        return False
    return userId
