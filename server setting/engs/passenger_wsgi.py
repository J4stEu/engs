import sys

import os

INTERP = os.path.expanduser("/var/www/u1138524/data/j4steu_venv/bin/python")
if sys.executable != INTERP:
   os.execl(INTERP, INTERP, *sys.argv)

sys.path.append(os.getcwd())

from app import application