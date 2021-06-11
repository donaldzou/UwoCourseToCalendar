import os
import json
from jsonmerge import merge
total = {}


jsonfiles = os.listdir('jsonfiles')
# os.remove('merge.json')

for i in jsonfiles:
    if i.endswith('.json'):
        with open('jsonfiles/'+i) as json_file:
            print(i)
            data = json.load(json_file)
            total = merge(total, data)

f = open('merge.json', 'w+')
json.dump(total, f)