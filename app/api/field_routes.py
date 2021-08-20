from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Field, db

field_routes = Blueprint('fields', __name__)


@field_routes.route('/')
def get_fields():
