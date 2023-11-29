"""empty message

Revision ID: c1e578830c41
Revises: 
Create Date: 2023-11-27 20:47:02.086223

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c1e578830c41'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_form_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=1000), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_form_table')
    # ### end Alembic commands ###