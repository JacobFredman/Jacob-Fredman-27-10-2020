from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_url_path='')
# app = Flask(__name__, static_folder='front-end/build', static_url_path='')
cors = CORS(app)
