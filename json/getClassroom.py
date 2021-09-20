import os
import json
from datetime import datetime

classroom = {}

def timeToMin(time):
    t = time.split(' ')
    hours = t[1].split(":")
    hours[0] = int(hours[0])
    hours[1] = int(hours[1])
    if t[2] == "PM" and hours[0] != 12:
        hours[0] += 12
    return (hours[0] * 60) + hours[1]

jsonfiles = os.listdir('jsonfiles')
# os.remove('merge.json')

for i in jsonfiles:
    if i.endswith('.json'):
        with open('jsonfiles/'+i) as json_file:
            print(i)
            data = json.load(json_file)
            for i in data:
                print(i)
                for sche in data[i]['schedule']:
                    if sche['location'] not in classroom.keys():
                        classroom[sche['location']] = {
                            "MO": [],
                            "TU": [],
                            "WE": [],
                            "TH": [],
                            "FR": []
                        }
                    for day in sche['rrule']['byday']:
                        if len(sche['start'].split(" ")) == 3:
                            start = timeToMin(sche['start'])
                            end = timeToMin(sche['end'])
                            classroom[sche['location']][day].append({
                                "start": start, "end": end
                            })

print(classroom)




