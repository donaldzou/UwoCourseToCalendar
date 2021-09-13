<?php
if (!isset($_GET['id'])){
    header("Location: ./");
}

$SEPARATOR = '\n';
$calendarHead = [
    'BEGIN:VCALENDAR',
    'PRODID:Calendar',
    'VERSION:2.0',
    'X-WR-CALNAME:2021-2022 Course Schedule'
];
$calendarTimezone = 'TZID=America/Toronto';
$calendarEnd = 'END:VCALENDAR';
$read_json = file_get_contents("json/t.json");
$course = json_decode($read_json, true);
$id_array = explode('_', $_GET['id']);
function icalUTCtimestamp($timestamp){
    return date("Ymd\THis", $timestamp);
}



header('Content-Type: text/calendar');
// Echo header
foreach ($calendarHead as $e){
    echo $e."\n";
}

foreach ($id_array as $id){
    $name = $course[$id]['name'].' '.$course[$id]['type'].' - '.$course[$id]['subject'];
    $description = 'Instructor: '.$course[$id]['instructor'];
    $all_day = false;
    for ($i = 0; $i < count($course[$id]['schedule']); $i++){
        $location = $course[$id]['schedule'][$i]['location'];
        if ($course[$id]['schedule'][$i]['start'] !== $course[$id]['schedule'][$i]['end']){
            $start_date = icalUTCtimestamp(strtotime($course[$id]['schedule'][$i]['start']));
            $end_date = icalUTCtimestamp(strtotime($course[$id]['schedule'][$i]['end']));
        }else{
            $all_day = true;
            $start_date = date("Ymd",strtotime($course[$id]['schedule'][$i]['start']));
            $end_date = date("Ymd",strtotime($course[$id]['schedule'][$i]['end']));
        }
        $until_date = icalUTCtimestamp(strtotime($course[$id]['schedule'][$i]['rrule']['until'].' 23:59:59'));
        $RRULE = 'FREQ='.$course[$id]['schedule'][$i]['rrule']['freq'].
            ';UNTIL='.$until_date.
            ';BYDAY='.join(",",$course[$id]['schedule'][$i]['rrule']['byday']);
        $event = [
            'BEGIN:VEVENT',
            'UID:'.$id.'_'.$i.'@default',
            'CLASS:PUBLIC',
            'DESCRIPTION:'.$description,
            'RRULE:'.$RRULE,
            'DTSTAMP;'.$calendarTimezone.':'.date("Ymd\THis"),
            'DTSTART;'.$calendarTimezone.':'.$start_date,
            'DTEND;'.$calendarTimezone.':'.$end_date,
            'LOCATION:'.$location,
            'SUMMARY;LANGUAGE=en-us:'.$name,
            'TRANSP:TRANSPARENT'
        ];
        foreach ($event as $e){
            echo $e."\n";
        }
        if ($all_day) echo "X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\n";
        echo "END:VEVENT\n";
    }


}
echo $calendarEnd;





