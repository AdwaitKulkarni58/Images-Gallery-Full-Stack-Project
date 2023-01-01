# save this as app.py
import requests
from flask import Flask, request

UNSPLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY = ""

app = Flask(__name__)


@app.route("/new-image")
def new_image():
    input = request.args.get("query")
    headers = {
        "Authorization": "Client-ID " +
        UNSPLASH_KEY, "Accept-Version": "v1"
    }
    params = {
        "query": input
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    return response.json()


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5050)
