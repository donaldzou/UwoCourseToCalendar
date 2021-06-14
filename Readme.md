# UWO Course to Calendar
*aka. UWOCourseToCal*

Access: https://uwo-to-cal.tk

## About
This is a project to solve this problem I always have since I came to UWO, is that neither DraftMySchedule or Student Center provides a way to add the course schedule right into my calendar. Therefore I created this webcal server, that students can add all their courses, labs and tutorial, and it will import to their calendar. I will keep updating the calendar data till 2021 fall semester, since DraftMySchedule said the course timetable could change.

**This project is not affiliate with any department of Western University. Is 100% non-commercial personal project.**

## Course Data:
Latest Update: 2021/06/12

Available Course: 2021-2022 Fall & Winter

## How to use it
You can go to <a href="https://uwo-to-cal.tk">https://uwo-to-cal.tk </a> to add all your courses,labs and tutorial, and click the **Add** button on the bottom of your screen and choose the calendar you're using. Continue to read the next part on which calendar you should choose if you're not sure.

### Which calendar should I choose?

#### UWO myoffice
This should bring you to your UWO outlook calendar directly. If it doesn't, login to your UWO outlook, and try again. After you clicked, you can just follow the on screen instruction to subscribe.

#### Apple Calendar
This option would be the easiest way for all Apple device user to import, it will bring you directly to the "Calendar" app, and ask you if you would like to subscribe the calendar.

#### Outlook.com
This option is similar to **UWO myoffice**, but it will bring you to the personal Outlook.com, or its previous name "Hotmail.com", and just follow the instruction on website then you should be able to subscribe the calendar.

#### Outlook App
This option is for user who use the Outlook app on their Windows, you can choose this option then Windows should have a popup, ask you if you want to open it on Outlook.

#### Google Calendar
This option is for Google Calendar user, it is the most straightforward one, the easiest to setup.

### For international student
I've configured all calendar to be London Ontario time, so your calendar app should be able to adjust to your local timezone. But notice some online platform like the UWO myoffice / outlook.com / Google Calendar might have a default timezone that is not your local timezone, you need to adjust that.

### For advance user >_
The calendar can be subscribe by any `webcal://` protocal supported calendar application. The link can simply generate by adding your class number, each number is separated by a underscore `_`:

```
webcal://uwo-to-cal.tk/addCal/classNum_classNum_classNum...

Example: webcal://uwo-to-cal.tk/addCal/4333_4336_3718
```

Or just to download the calendar file and use it without subscribing it:

```angular2html
https://uwo-to-cal.tk/addCal/classNum_classNum_classNum...

Example: https://uwo-to-cal.tk/addCal/4333_4336_3718
```


## What if a course that is on DraftMySchedule, but not on here?

Since I'm only able to access undergrad courses, labs and tutorial, so post-grad course is not on here. But if there is some undergrad course that is not on the site, please send me an email or report this problem on the <a href="https://github.com/donaldzou/UwoCourseToCalendar">github page </a> ;)
