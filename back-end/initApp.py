from flask import Flask
from flask_cors import CORS, cross_origin

application = app = Flask(__name__)
cors = CORS(app)
