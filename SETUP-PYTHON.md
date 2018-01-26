# Set up postgres:
sudo yum install postgresql96 postgresql96-server postgresql96-devel postgresql96-contrib postgresql96-docs
sudo service postgresql96 initdb
----
sudo vim /var/lib/pgsql/data/pg_hba.conf
Change "all" and "host 127.0.0.1" to the following lines:

local   all         all                                  trust
host    all         all         0.0.0.0/0          md5
----
sudo service postgresql96 start

You should now be able to log into psql using the following command:

# Set up Python:
Open ~/.bashrc
Change the python alias line to:
alias python=python36
Restart the c9 environment

sudo ln -sf /usr/bin/pip-3.6 /etc/alternatives/pip
sudo ln -sf /usr/bin/python3.6 /etc/alternatives/python

# Set up virtualenv:
pip install virtualenvwrapper
mkdir ~/.virtualenvs
----
Add the following to the end of the .bash_profile:
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/environment/writing-site/
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python
export VIRTUALENVWRAPPER_VIRTUALENV=/usr/local/bin/virtualenv

source /usr/local/bin/virtualenvwrapper.sh
----
source ~/.bash_profile
mkvirtualenv writing-site

You can now use "workon writing-site" to start the env

# Set up Django:
