from flask import Blueprint, jsonify

form_routes = Blueprint("forms", __name__)


@form_routes.route('/')
def forms():
    return { 
        'id': 1,
       'message': "Routing Works" 
        }