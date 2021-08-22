"""empty message

Revision ID: beeeac90e4ba
Revises: d25f4d1b7ea0
Create Date: 2021-08-20 10:00:09.924819

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'beeeac90e4ba'
down_revision = 'd25f4d1b7ea0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('fields', 'required',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('fields', 'required',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###
