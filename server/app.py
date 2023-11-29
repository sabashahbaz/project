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
    #print("hi")

    user_info_dicts = [user.to_dict() for user in user_info]
    #print("user info", user_info_dicts)
    return jsonify({"user_info": user_info_dicts})

#display more details of the user complaint 
@app.get('/userComplaint/<int:id>')
def get_user_complaint(id:id):
    complaint_info = User_Form.query.filter(User_Form.id == id).first()
    #print("AAJAJAAJJAJAJAAAAA")

    if complaint_info:
        complaint_response = complaint_info.to_dict() 
        #print("complaint info", complaint_response)
        return jsonify({"complaint_info": complaint_response})
    else:
        return jsonify({"error": "Complaint not found"}), 404
    
#Update complaint status 
@app.patch('/updateState/<int:id>')
def update_status(id:id):
    requested_data = request.get_json()
    print(requested_data)

    user_status = User_Form.query.filter(User_Form.id == id).first()
    
    if user_status:
        new_status = requested_data['status']
        user_status.status = new_status
        db.session.commit()

        return jsonify(new_status), 200

    else:
        return jsonify({"error": "User not found"}), 404
    
#Add admin response
@app.post('/addResponse/<int:id>')
def add_response(id:id):
    print("PLEASE WORK")
    requested_data = request.get_json()
    print("requested data",requested_data)

    user_data = User_Form.query.filter(User_Form.id == id).first()

    if user_data: 
        user_data.admin_response = requested_data['response']
        db.session.commit()

        return {"response": user_data.to_dict()}
    else:
        return jsonify({"error": "User not found"}), 404
    
#Update the admin response
@app.patch('/updateResponse/<int:id>')
def update_response(id:id):
    requested_data = request.get_json()
    print(requested_data)

    user = User_Form.query.filter(User_Form.id == id).first()
    
    if user:
        new_response = requested_data['response']
        user.admin_response = new_response
        db.session.commit()

        return jsonify(new_response), 200

    else:
        return jsonify({"error": "User not found"}), 404
    

@app.route("/")
def hello_zealthy():
    return "Hello Zealthy!"


if __name__ == "__main__":
    app.run(port=5555, debug=True)