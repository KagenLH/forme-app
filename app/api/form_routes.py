from flask import Blueprint, jsonify
# from flask_login import login_required
from app.models import Form

form_routes = Blueprint("forms", __name__)


@form_routes.route('/')
# @login_required
def forms():
    forms = Form.query.all()
    return {forms: forms}
