from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Form, db

form_routes = Blueprint("forms", __name__)


# get all forms --- remove this route?
@form_routes.route('/')
# @login_required
def get_forms():
    forms = Form.query.all()  # original query for ALL forms
    return {'forms': [form.to_dict() for form in forms]}


@form_routes.route('/<int:id>', methods=['GET', 'DELETE'])
@login_required
def forms(id):
    # get a specific form by primary key
    if request.method == 'GET':
        form = Form.query.get(id)
        return form.to_dict()
    # delete a specific form by primary key
    elif request.method == 'DELETE':
        form = Form.query.get(id)  # takes a form's id

        db.session.delete(form)
        db.session.commit()
        return form.to_dict()


# (GET) allow user to access a form without being logged in, i.e. SHARED form
@form_routes.route('/<int:id>/shared')
def shared_form(id):
    form = Form.query.get(id)
    return form.to_dict()


# get forms by owner_id (i.e. all forms owned by a specific user)
@form_routes.route('/users/<int:id>')
def user_forms(id):  # takes a user's id
    forms = Form.query.filter_by(owner_id=id).all()
    # destructure in forms store
    return {'forms': [form.to_dict() for form in forms]}


@form_routes.route('/create', methods=['POST'])
@login_required
def create_form():
    # print('***** REQUEST DATA INFO *****', request.get_json())

    # pull JSON data from request body
    data = request.get_json()

    form = Form(
        title=data["title"],
        owner_id=data["owner_id"],
        description=data["description"],
        label_align=data["label_align"],
        description_align=data["description_align"],
        title_align=data["title_align"]
    )

    db.session.add(form)
    db.session.commit()

    return form.to_dict()


# ! currently causes error "405 method not allowed"
# ! when not bundled with `user_forms(id)` above
# delete a specific form by primary key
# @form_routes.route('/<int:id>', methods=['DELETE'])
# def delete_form(id):
#     if request.method == 'DELETE':
#         form = Form.query.get(id)

#         db.session.delete(form)
#         db.session.commit()
#         return form.to_dict()
