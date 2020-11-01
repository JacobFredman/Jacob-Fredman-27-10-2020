from initApp import *
# from messagesView import *


@app.route('/api')
@cross_origin()
def Welcome():
    return "Welcome to the API!!!"


@app.route('/api/justpie/')
@cross_origin()
def GeneratePie():
    'hiiiiiiiiiiiiiiiiiiiiiiiiiii!!!!!'


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')

# if __name__ == "__main__":
#     app.run(threaded=True)
