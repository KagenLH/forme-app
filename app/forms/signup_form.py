from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import Email, ValidationError, InputRequired, Length, EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[InputRequired(message='Input Required'), Length(max=40, message='Must be less than 40 characters'), username_exists])
    email = StringField('email', validators=[InputRequired(), Length(
        max=40, message='Must be less than 40 characters'), Email(message='Invalid'), user_exists])
    password = PasswordField('password', validators=[
        InputRequired(), EqualTo('confirm', message='Passwords must match')])
    confirm = PasswordField('confirm')
