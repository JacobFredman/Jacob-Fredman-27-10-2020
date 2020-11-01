from flask import Blueprint, request, json
from initApp import app
from message import Message
from auth import get_userId_from_token
import jsons

messagesList = []


@app.route('/get_all_messages', methods=['POST'])
def get_all_masseges():
    encodedtoken = request.headers.get('Authorization')
    userId = get_userId_from_token(encodedtoken)
    if not userId:
        return 'not authunticated user', 401
    userMessages = [
        jsons.dump(msg) for msg in messagesList if msg.receiver == userId]
    return json.dumps({"messages": userMessages}), 200


@app.route('/write_message', methods=['POST'])
def write_message():
    encodedtoken = request.headers.get('Authorization')
    userId = get_userId_from_token(encodedtoken)
    if not userId:
        return 'not authunticated user', 401
    messageParameters = request.get_json(force=True)
    message = Message(userId,
                      messageParameters['reciverId'],
                      messageParameters['messageBody'],
                      messageParameters['subject']
                      )
    messagesList.append(message)
    return 'message added', 200


@app.route('/delete_message', methods=['POST'])
def delete_message():
    encodedtoken = request.headers.get('Authorization')
    userId = get_userId_from_token(encodedtoken)
    if not userId:
        return 'not authunticated user', 401
    msgId = request.get_json(force=True)['msgId']

    for msg in messagesList:
        if msg.id == msgId:
            if userId == msg.receiver:
                messagesList.remove(msg)
                return "deleted seccessfuly", 200
            else:
                return "this user cen't delete this message becouse he is not the owner of the message", 401
    return "message not exist", 201
