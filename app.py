from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    return render_template('register.html')

@app.route('/response')
def response():
    return render_template('welcome.html')

#Lines of code to have the frontend part to function and display
if __name__ == '__main__':
    app.run(debug=True)