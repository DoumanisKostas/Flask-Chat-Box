from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample chat history (in a real application, this would be stored in a database)
chat_history = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.json.get('message')
    print(message)
    if message:
        chat_history.append(message)
        # Respond with the updated chat history
        return jsonify(chat_history=chat_history)
    return jsonify({"error": "No message provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)
