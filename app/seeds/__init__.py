from flask.cli import AppGroup
from .users import seed_users, undo_users
from .forms import seed_forms, undo_forms
from .fields import seed_fields, undo_fields

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_forms()
    seed_fields()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_forms()
    undo_fields()
    # Add other undo functions here
