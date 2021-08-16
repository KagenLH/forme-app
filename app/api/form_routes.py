from flask import Blueprint, jsonify

form_routes = Blueprint("forms", __name__)


@form_routes.route('/')
def forms():
    return "Routing Works"