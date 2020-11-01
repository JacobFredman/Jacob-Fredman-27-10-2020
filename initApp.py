
from flask_cors import CORS, cross_origin
from flask import Flask
from flask import render_template
from flask import send_from_directory
from flask import request
from flask import jsonify
from flask import make_response

# app = Flask(__name__)
app = Flask(__name__, static_folder='front-end/prod', static_url_path='')
cors = CORS(app)
