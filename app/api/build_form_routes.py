from flask import Blueprint, jsonify

build_form_routes = Blueprint("build-form", __name__)

@build_form_routes.route('/')
def build_form():
    pass
