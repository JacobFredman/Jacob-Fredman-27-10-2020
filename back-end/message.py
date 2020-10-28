from datetime import datetime


class Message:
    def __init__(self, sender, receiver, message, subject):
        self.sender = sender
        self.receiver = receiver
        self.message = message
        self.subject = subject
        self.creation_date = datetime.today().strftime('%d-%m-%Y')
