"""empty message

Revision ID: b3e721c02f48
Revises: 9aec744a6b98
Create Date: 2021-08-20 13:35:16.871785

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b3e721c02f48'
down_revision = '9aec744a6b98'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('fields', 'form_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('fields', 'form_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
