import os
import json
from jsonmerge import merge
total = {}


jsonfiles = os.listdir('jsonfiles')
#os.remove('merge.json')

for i in jsonfiles:
    if i.endswith('.json'):
        with open('jsonfiles/'+i) as json_file:
            print(i)
            data = json.load(json_file)
            for key in data.keys():
                if key == "4098":
                    print('dup')
                if key in total.keys():
                    print("Existed - "+key)
                    exit()
                total[key] = data[key]
            # total = merge(total, data)

f = open('merge.json', 'w+')
json.dump(total, f)
print("-------")
print("Done merging to merge.json")
print("-------")