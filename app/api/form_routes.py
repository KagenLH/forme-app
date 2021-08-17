from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Form, db

form_routes = Blueprint("forms", __name__)


# get all forms
@form_routes.route('/')
# @login_required
def forms():
    forms = Form.query.all()
    return {'forms': [form.to_dict() for form in forms]}


# TODO: create route for getting a specific form by primary key


@form_routes.route('/create', methods=['POST'])
@login_required
# TODO: figure out how to get form data from req body
def create_form():
    form = Form()
    # form.populate_obj()

    db.session.add(form)
    db.sesion.commit()

    return {"confirmation": "Routing SUCCESS"}  # form


# delete a specific form by primary key
@form_routes.route('/<int:id>', methods=['DELETE'])
def delete(id):
    form = Form.query.get(id)

    db.session.delete(form)
    db.session.commit()
    return form
