<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>UWO Course to Calendar</title>

        <link href="css/bootstrap.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <script src="https://kit.fontawesome.com/811c1ec641.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light sticky-top">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h3">UWO Course to Calendar</span>
            </div>
        </nav>
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container" style="display: block; max-width: 600px">
                <div class="dropup">
                    <button class="btn dropdown-toggle btn-100 bg-theme add_cal" style="color: white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" disabled>
                       <small>Add 0 class to calendar</small>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="width: 100%">
                        <li><a class="dropdown-item" href="#" id="add_uwocal"><i class="fas fa-graduation-cap"></i> UWO myoffice</a></li>
                        <li><a class="dropdown-item" href="#" id="add_webcal"><i class="fab fa-apple"></i> Apple Calendar</a></li>
                        <li><a class="dropdown-item" href="#" id="add_outlookcal"><i class="fab fa-microsoft"></i> Outlook.com</a></li>
                        <li><a class="dropdown-item" href="#" id="add_webcal"><i class="fab fa-microsoft"></i> Outlook App</a></li>
                        <li><a class="dropdown-item" href="#" id="add_googlecal"><i class="fab fa-google"></i> Google Calendar</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container main mb-3">
            <div class="input_form mb-3">
                <h6 class="color-theme">Search your course / lab / tutorial by class number <a href="#" id='class_nbr_help' data-bs-toggle="tooltip" data-bs-placement="right" title="Class number can be found on your DraftMySchedule site, and is called 'Class Nbr.' next to each course."><i class="far fa-question-circle"></i></a></h6>
                <div class="row">
                    <div class="col-md-9 col-sm mb-3">
                        <input type="number" class="form-control" id="course_number">
                    </div>
                    <div class="col-md-3 col-sm">
                        <button class="btn btn-secondary btn-100" id="search">Search</button>
                    </div>
                </div>
                <hr>

<!--                <div class="row">-->
<!--                    <div class="col-sm" style="display: flex; align-items: flex-end;">-->
<!--                        <h6>Add to:</h6>-->
<!--                    </div>-->
<!--                    <div class="col-sm">-->
<!--                        <button class="btn btn-primary btn-100 bg-theme add_cal" id="add_webcal" disabled><i class="fab fa-apple"></i> Apple Calendar</button>-->
<!--                    </div>-->
<!--                    <div class="col-sm">-->
<!--                        <button class="btn btn-primary btn-100 bg-theme add_cal" id="add_outlookcal" disabled><i class="fab fa-microsoft"></i> Outlook.com</button>-->
<!--                    </div>-->
<!--                    <div class="col-sm">-->
<!--                        <button class="btn btn-primary btn-100 bg-theme add_cal" id="add_365cal" disabled><i class="fab fa-microsoft"></i> UWO Office</button>-->
<!--                    </div>-->
<!--                </div>-->

            </div>

            <div class="added_course">
            </div>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/ics.deps.min.js"></script>
    <script src="js/ics.js"></script>
    <script src="js/index.js"></script>
</html>