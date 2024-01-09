from flask import Flask
from flask import request
import json
app = Flask(__name__)

@app.route('/testAPI', methods=['POST'])
def post1():
    if request.is_json:
        content = json.loads(request.data, strict=False) # strict = False allow for escaped char
        print(content)
    return {
        "status":"OK",
        "content": request.json
        }
    
