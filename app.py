from flask import Flask, jsonify, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for extension communication

@app.route('/')
def home():
    return jsonify({"message": "API is working"}), 200

@app.route('/logout-gmail', methods=['GET'])
def logout_gmail():
    return redirect("https://accounts.google.com/Logout"), 302

if __name__ == '__main__':
    print("🚀 Server is starting at http://127.0.0.1:5001/")
    app.run(debug=True, port=5001)
