from flask import Flask
from flask import request
import src
import json
app = Flask(__name__)

@app.route('/testAPI', methods=['POST'])
def post1():
    print(request.is_json)
    if request.is_json:
        content = request.get_json()
    return {
        "status":"OK",
        "content": content
        }
    
