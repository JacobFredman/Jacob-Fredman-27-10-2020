from flask import Blueprint, request, json
from app import app
from message import Message

messagesList = []


@app.route('/get_all_messages', methods=['POST'])
def get_all_masseges():
    currentUserId = request.get_json(force=True)['currentUserId']
    userMessages = [
        msg for msg in messagesList if msg.receiver == currentUserId]
    return json.dumps({"messages": userMessages}), 200


@app.route('/write_message', methods=['POST'])
def write_message():
    pass


@app.route('/delete_message', methods=['DELETE'])
def get_all_masseges():
    pass
