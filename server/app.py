from flask import Flask, request, make_response, jsonify 
from flask_migrate import Migrate
from models import db, User_Form
from flask_cors import CORS


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

migrate = Migrate(app, db)

db.init_app(app)


#submit user info to database 
@app.post('/submit_user_form')
def submit_user_form():
    data = request.json
    print("we made it")
    try:
        user_info = User_Form (
            first_name = data['first_name'], 
            last_name = data['last_name'],
            email = data['email'],
            description = data['description']
        )

        db.session.add(user_info)
        db.session.commit()

        return {"info": user_info.to_dict()}
    
    except Exception as e:
        print("Error:" , e)
        return make_response(jsonify({"error": "function submit_user_form is broken"}), 400)

#display the information the user has submitted
@app.get('/userInfo')
def get_user_info():
    print("meowSFJSFJAAAAAAAAAAAAAAAAAA")
    user_info = User_Form.query.all()
    print("hi")

    user_info_dicts = [user.to_dict() for user in user_info]
    print("user info", user_info_dicts)
    return jsonify({"user_info": user_info_dicts})


@app.route("/")
def hello_zealthy():
    return "Hello Zealthy!"


if __name__ == "__main__":
    app.run(port=5555, debug=True)