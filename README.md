
# Flask Chat Box

A simple chat application built using Flask, HTML, CSS, and JavaScript. This project demonstrates basic full-stack development skills, including front-end and back-end integration, and provides a foundation for building more advanced web applications.

## Features

- **Real-time Messaging**: Send and receive messages instantly.
- **Front-End Interface**: A user-friendly chat interface built with HTML and CSS.
- **Back-End with Flask**: Uses Python's Flask framework to handle server-side logic and routing.
- **Dynamic Updates**: Utilizes JavaScript (Fetch API) for sending and receiving messages without reloading the page.
- **Easy to Deploy**: The app is easy to deploy on any server that supports Python and Flask.

## Prerequisites

- Python 3.7 or higher
- Flask library
- Basic knowledge of HTML, CSS, JavaScript, and Python

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flask-chat-box.git
cd flask-chat-box
```

### 2. Create and Activate a Virtual Environment

- **Windows:**
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```

- **macOS/Linux:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

### 3. Install the Required Packages

Install the required Python packages using `pip`:

```bash
pip install -r requirements.txt
```

### 4. Run the Application

Start the Flask server:

```bash
flask run
```

The application will run locally on `http://127.0.0.1:5000`. Open this URL in your web browser to use the chat application.

## Project Structure

```
flask-chat-box/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
└── README.md
```

- **app.py**: Main Flask application file.
- **requirements.txt**: Lists the Python dependencies for the project.
- **templates/**: Contains HTML template files (`index.html`).
- **static/**: Contains static assets such as CSS and JavaScript files.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out via email: [your-email@example.com](mailto:your-email@example.com).
