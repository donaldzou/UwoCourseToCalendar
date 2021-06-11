<?php
if (!isset($_GET['id'])){
    header("Location: ./");
}

$SEPARATOR = '\n';
$calendarHead = [
    'BEGIN:VCALENDAR',
    'PRODID:Calendar',
    'VERSION:2.0'
];
$calendarTimezone = 'TZID=America/Toronto';
$calendarEnd = 'END:VCALENDAR';
$read_json = file_get_contents("json/merge.json");
$course = json_decode($read_json, true);
$id_array = explode(',', $_GET['id']);
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
    $location = $course[$id]['location'];
    $start_date = icalUTCtimestamp(strtotime($course[$id]['schedule'][0]['start']));
    $end_date = icalUTCtimestamp(strtotime($course[$id]['schedule'][0]['end']));
    $RRULE = 'FREQ='.$course[$id]['schedule'][0]['rrule']['freq'].
        ';UNTIL='.$course[$id]['schedule'][0]['rrule']['until'].
        ';BYDAY='.join(",",$course[$id]['schedule'][0]['rrule']['byday']);
    $event = [
        'BEGIN:VEVENT',
        'UID:'.$id.'@default',
        'CLASS:PUBLIC',
        'DESCRIPTION:'.$description,
        'RRULE:'.$RRULE,
        'DTSTAMP;'.$calendarTimezone.':'.date("Ymd\THis"),
        'DTSTART;'.$calendarTimezone.':'.$start_date,
        'DTEND;'.$calendarTimezone.':'.$end_date,
        'LOCATION:'.$location,
        'SUMMARY;LANGUAGE=en-us:'.$name,
        'TRANSP:TRANSPARENT',
        'END:VEVENT'
    ];
    foreach ($event as $e){
        echo $e."\n";
    }
}
echo $calendarEnd;





