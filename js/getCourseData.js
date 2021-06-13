let data = $(".table.table-condensed.table-hover")

let course_year = -1;
let course_year_cookie = false;

let co = document.cookie.split(';');
co.forEach(function(elem){
    if (elem.startsWith("year=")){
        course_year = elem.split('=')[1];
        console.log(course_year);
        course_year_cookie = true;
    }
})
if (!course_year_cookie){
    document.cookie = 'year=-1'
}
course_year = parseInt(course_year);
course_year++;
document.cookie = 'year='+course_year;



let session_code = {
    "0": {
        "start": {
            "M": "2021/9/13",
            "Tu": "2021/9/14",
            "W": "2021/9/8",
            "Th": "2021/9/9",
            "F": "2021/9/10"
        },
        "end": "2022/4/1"
    },
    "1": {
        "start": {
            "M": "2021/9/13",
            "Tu": "2021/9/14",
            "W": "2021/9/8",
            "Th": "2021/9/9",
            "F": "2021/9/10"
        },
        "end": "2021/12/8"
    },
    "2": {
        "start": {
            "M": "2022/1/3",
            "Tu": "2022/1/4",
            "W": "2022/1/5",
            "Th": "2022/1/6",
            "F": "2022/1/7"
        },
        "end": "2022/4/1"
    },
    "Q1": {
        "start": {
            "M": "2021/9/13",
            "Tu": "2021/9/14",
            "W": "2021/9/15",
            "Th": "2021/9/16",
            "F": "2021/9/17"
        },
        "end": "2021/10/25"
    },
    "Q2": {
        "start": {
            "M": "2021/11/1",
            "Tu": "2021/10/26",
            "W": "2021/10/27",
            "Th": "2021/10/28",
            "F": "2021/10/29"
        },
        "end": "2021/12/8"
    },
    "Q3": {
        "start": {
            "M": "2022/1/3",
            "Tu": "2022/1/4",
            "W": "2022/1/5",
            "Th": "2022/1/6",
            "F": "2022/1/7"
        },
        "end": "2022/2/11"
    },
    "Q4": {
        "start": {
            "M": "2022/2/14",
            "Tu": "2022/2/15",
            "W": "2022/2/16",
            "Th": "2022/2/17",
            "F": "2022/2/18"
        },
        "end": "2022/4/1"
    },
    "Q6": {
        "start": {
            "M": "2021/9/13",
            "Tu": "2021/9/14",
            "W": "2021/9/8",
            "Th": "2021/9/9",
            "F": "2021/9/10"
        },
        "end": "2021/12/8"
    },
    "5": {
        "start": {
            "M": "2021/9/13",
            "Tu": "2021/9/14",
            "W": "2021/9/8",
            "Th": "2021/9/9",
            "F": "2021/9/10"
        },
        "end": "2022/4/1"
    },
    "6": {
        "start": {
            "M": "2021/9/13",
            "Tu": "2021/9/14",
            "W": "2021/9/8",
            "Th": "2021/9/9",
            "F": "2021/9/10"
        },
        "end": "2021/12/8"
    },
    "7": {
        "start": {
            "M": "2022/1/3",
            "Tu": "2022/1/4",
            "W": "2022/1/5",
            "Th": "2022/1/6",
            "F": "2022/1/7"
        },
        "end": "2022/4/1"
    },
    "Q7": {
        "start": {
            "M": "2022/1/3",
            "Tu": "2022/1/4",
            "W": "2022/1/5",
            "Th": "2022/1/6",
            "F": "2022/1/7"
        },
        "end": "2022/4/1"
    }
}

let convert = function(ori) {
    switch (ori) {
        case "M":
            return "MO"
        case "Tu":
            return "TU"
        case "W":
            return "WE"
        case "Th":
            return "TH"
        case "F":
            return "FR"
    }
}

let timezone = "GMT-0400";
let course_dict = {}
let isEmpty = true;
for (let i = 0; i < data.length - 1; i++) {
    for (let k = 0; k < $(data[i]).children().children().slice(1).length; k++) {
        let course = $($($(data[i]).children().children().slice(1)[k]));

        let course_subject = $(course.children()[11]).children().children("input[name=subject]").val()
        let course_name = $(course.children()[11]).children().children("input[name=catalog_nbr]").val()
        let course_type = $(course.children()[11]).children().children("input[name=ssr_component]").val()
        let course_id = $(course.children()[11]).children().children("input[name=class_nbr]").val()
        let course_session = $(course.children()[11]).children().children("input[name=session_code]").val()
        let fullSchedule = []
        for (let m = 0; m < $(course.children()[5].children).children().children().length; m++) {
            let days = $($(course.children()[5].children).children().children()[m]).children()[0].innerHTML.replaceAll('\n', '').replaceAll('\t', '').replaceAll(' ', '').split('&nbsp;');
            let time = $($(course.children()[5].children).children().children()[m]).children()[1].innerHTML.split('-');

            for (let t = 0; t < time.length; t++) {
                time[t] = time[t].trim()
            }
            let online = true;
            for (var q = 0; q < days.length; q++) {
                if (days[q] !== "") {
                    console.log(course_session);
                    let start = session_code[course_session]['start'][days[q]] + " " + time[0];
                    let end = session_code[course_session]['start'][days[q]] + " " + time[1];
                    let byday = [];
                    let until = session_code[course_session]['end']
                    for (let c = 0; c < days.length; c++) {
                        if (days[c] !== "")
                            byday.push(convert(days[c]))
                    }
                    fullSchedule.push({
                        "start": start,
                        "end": end,
                        "rrule": {
                            "byday": byday,
                            "until": until,
                            "freq": "WEEKLY"
                        }
                    })
                    online = false;
                    break;
                }
            }
            if (online){
                let start = session_code[course_session]['start']["M"]
                let end = session_code[course_session]['start']["M"]
                let until = session_code[course_session]['end']
                let byday = ["MO","TU","WE","TH","FR"];
                fullSchedule.push({
                    "start": start,
                    "end": end,
                    "rrule": {
                        "byday": byday,
                        "until": until,
                        "freq": "WEEKLY"
                    }
                })
            }
        }

        let course_instructor = course.children()[3].innerHTML.replaceAll('	', '').replaceAll('\n', '')
        let course_room = $(course.children()[5].children).children().children().children()[2].innerHTML

        course_dict[course_id] = {
            "subject": course_subject,
            "name": course_name,
            "type": course_type,
            "schedule": fullSchedule,
            "location": course_room,
            "instructor": course_instructor
        }
        isEmpty = false;
    }
}

console.log(course_dict);


function saveText(text, filename){
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', filename);
    a.click()
}


if (isEmpty){
    setTimeout(function(){
        if (course_year != 5){
            $("input[name=catalog_nbr_typed]").val(course_year);
            $("#ClassInfoForm .btn-info[type=submit]").click()
        }
        else{
            document.cookie = 'year=0'
            $('#Subject option[hidden]').remove();
            $("input[name=catalog_nbr_typed]").val(0);
            $('#Subject option:selected').next().attr('selected', 'selected');
            $("#ClassInfoForm .btn-info[type=submit]").click()
        }
    },1000);
}else{
    saveText( JSON.stringify(course_dict), $("#Subject option:selected").val()+"_"+(course_year-1)+"_lab.json" );

    setTimeout(function(){
        if (course_year != 5){
            $("input[name=catalog_nbr_typed]").val(course_year);
            $("#ClassInfoForm .btn-info[type=submit]").click()
        }
        else{
            document.cookie = 'year=0'
            $('#Subject option[hidden]').remove();
            $("input[name=catalog_nbr_typed]").val(0);
            $('#Subject option:selected').next().attr('selected', 'selected');
            $("#ClassInfoForm .btn-info[type=submit]").click()
        }
    },2000);
}