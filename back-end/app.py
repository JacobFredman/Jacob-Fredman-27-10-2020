from initApp import *
from messagesView import *


@app.route('/aaa', methods=['POST', 'GET'])
def hello():
    return 'hello'


if __name__ == "__main__":
    app.run(threaded=True)
