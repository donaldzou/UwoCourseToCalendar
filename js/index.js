var selected_course = {};
var course = {}
var cal = ics();
var search_btn = $("#search");
$(document).ready(function (){
    $.ajax({
        url:"json/merge.json",
        type: "GET"
    }).done(function (res){
        course = res;
    });
});

search_btn.click(function (){
    var course_num = $("#course_number").val();
    if (course[course_num] !== undefined){
        let selected = course[course_num];
        if (selected_course[course_num] === undefined){
            console.log(selected);
            let html =
                '<div class="card animate__animated animate__bounceIn" id="'+course_num+'" style="width: 100%"><div class="card-body">' +
                '   <div class="flex-row" style="display: flex">' +
                '    <span class="badge bg-theme" style="margin-right: 0.5rem">LEC</span><h6 class="card-title" style="margin-bottom: 0">'+selected['subject']+' - '+selected['name']+'</h6>' +
                '    <a class="card-link text-danger delete_course" style="margin-left: auto"><i class="bi bi-x-circle"></i></a>' +
                '   </div>' +
                '   <small>Course Num: '+course_num+'</small>' +
                '<hr><div class="course_info">';
            for (let k = 0; k < selected['schedule'].length; k++){
                if (selected['schedule'][k]['start'] === selected['schedule'][k]['end']){
                    html += '<small>No course time, maybe online/mixed</small><br>' +
                        '<small>Event type: All day event | Repeat: Weekly</small><br>' +
                        '<small>Repeat from: '+selected['schedule'][k]['start']+' | Repeat Until: '+selected['schedule'][k]['rrule']['until']+'</small><br>'
                }else{
                    html += '<p><strong>Session #'+(k+1)+'</strong></p><div class="row"><small class="col-sm">Start: '+selected['schedule'][k]['start']+'</small>' +
                        '<small class="col-sm">End: '+selected['schedule'][k]['end']+'</small></div><small>Event type: Normal event | Repeat: Weekly</small>' +
                        '<br><small>Repeat on: '+selected['schedule'][k]['rrule']['byday'].join(', ')+' | Repeat Until: '+selected['schedule'][k]['rrule']['until']+'</small>'
                    html += '<hr>'
                }
            }
            html += '</div></div></div>';
            selected_course[course_num] = selected;
            $(".added_course").append(html)
            $("#course_number").val("")
            check_added()
        }else {
            alert("Course already added");
        }
    }else{
        alert("Course number does not exist");
    }
});


$(".added_course").on("click",".delete_course", function (){
    let id = $(this).parents('.card').attr('id');
    $(this).parents('.card').remove();
    delete selected_course[id];
    check_added()
})

function check_added(){
    $(".add_cal").html("Add "+Object.keys(selected_course).length+" course to calendar")
   if (Object.keys(selected_course).length === 0){
       $(".add_cal").attr("disabled","disabled")
   }else{
       $(".add_cal").removeAttr("disabled")
   }
}
function get_id(){
    return Object.keys(selected_course).join("_")
}

$("#add_webcal").click(function (){
    if (location.port != ""){
        // Local testing
        window.open("webcal://"+location.hostname+":"+location.port+"/UwoCourseToCal/cal.php?id="+get_id())
    }else{
        window.open("webcal://"+location.hostname+"/addCal/"+get_id())
    }
});

$("#add_outlookcal").click(function (){
    let url = "https://"+location.hostname+"/addCal/"+get_id()
    window.open("https://outlook.live.com?path=/calendar/action/subscribe&url="+url);
});

$("#add_uwocal").click(function (){
    let url = "https://"+location.hostname+"/addCal/"+get_id()
    window.open("https://outlook.office.com?path=/calendar/action/subscribe&url="+url);
});

$("#add_googlecal").click(function (){
    let url = "webcal://"+location.hostname+"/addCal/"+get_id();
    window.open("https://calendar.google.com/calendar/u/0/r?cid="+url);
})

var class_nbr_help = document.getElementById('class_nbr_help')
var tooltip = new bootstrap.Tooltip(class_nbr_help)