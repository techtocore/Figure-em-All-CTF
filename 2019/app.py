import json
from collections import OrderedDict

from flask import Flask, request, render_template_string, render_template


app = Flask(__name__, static_url_path='',
            static_folder='public')  # create the Flask app

@app.route('/', methods=['GET'])
def hello():
    return "Welcome to Figure em' All CTF"

@app.route('/details', methods=['GET'])  # POST requests will be blocked
def details():

    ########################

    un = request.args.get('un')
    pw = request.args.get('pw')

    if un == "admin" and pw == "helloworld":
        return 'flag{Crypts_of_Winterfell}'

    return "Can't let you in"

    
@app.route('/hello-template')
def hello_ssti():
    flag = 'flag{winner_winner_vegetarian_dinner}'
    name = "world"

    if request.args.get('name'):
        name = request.args.get('name')
    template = '''<h2>Hello %s!</h2>''' % name
    return render_template_string(template, flag=flag)
    #########################################




@app.route('/update', methods=['POST'])  # GET requests will be blocked
def update():

    ########################

    req_data = request.get_json()
    auth = req_data['flag']

    if auth == 1:
        dictionary = OrderedDict()

        dictionary['Dept'] = 'CSE'
        dictionary['Name'] = 'Amrita'
        dictionary['City'] = 'Coimbatore'
        dictionary['Flag'] = 'flag{petta_parak}'

        return json.dumps(dictionary)

    dictionary = OrderedDict()

    dictionary['Dept'] = 'CSE'
    dictionary['Name'] = 'Amrita'
    dictionary['City'] = 'Coimbatore'

    content = json.dumps(dictionary)

    return content

    #########################################


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)  # run app in debug mode on port 3000
