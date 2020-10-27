from allViews import *
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app,  supports_credentials=True)


if __name__ == "__main__":
    app.run(threaded=True)
