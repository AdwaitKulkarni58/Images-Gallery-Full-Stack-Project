# save this as app.py
import os
from dotenv import load_dotenv
import requests
from flask import Flask, request
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY = os.environ.get("KEY", "")

if not UNSPLASH_KEY:
    raise EnvironmentError("Create .env.local file and insert API key")

app = Flask(__name__)
CORS(app)


@app.route("/new-image")
def new_image():
    input = request.args.get("query")
    headers = {
        "Authorization": "Client-ID " + UNSPLASH_KEY,
        "Accept-Version": "v1"
    }
    params = {
        "query": input
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    return response.json()


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5050)
