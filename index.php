<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>UWO Course to Calendar</title>

        <link href="css/bootstrap.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    </head>
    <body>
        <nav class="navbar navbar-light bg-light sticky-top">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h3">Course to Calendar</span>
            </div>
        </nav>
        <div class="container main mb-3">
            <div class="input_form mb-3">
                <h5 class="color-theme">Search your course by course number</h5>
                <div class="row">
                    <div class="col-md-9 col-sm mb-3">
                        <input type="number" class="form-control" id="course_number">
                    </div>
                    <div class="col-md-3 col-sm">
                        <button class="btn btn-secondary btn-100" id="search">Search</button>
                    </div>
                </div>
                <hr>
                <button class="btn btn-primary btn-100 bg-theme" id="add_cal" disabled>Add all to your calendar</button>
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