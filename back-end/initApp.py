from flask import Flask
from flask_cors import CORS, cross_origin

# app = Flask(__name__)
app = Flask(__name__, static_folder='client/build', static_url_path='')
cors = CORS(app)
