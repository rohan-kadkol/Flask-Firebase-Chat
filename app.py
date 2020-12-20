# TODO (9): from flask import Flask, render_template
# TODO (10): from init_flask import app
from flask import Flask, render_template
from init_flask import app

# TODO (11): Use @app.route to accept GET /
# TODO (12): Create a method called index
# TODO (13): Have index() return a render_template('index.html')
@app.route('/', methods=['GET'])
def index():
    """GET / - Endpoint to display the homepage HTML file."""

    return render_template('index.html')
