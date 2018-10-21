# Project Overview

In this project i was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and i was left with an application with an incomplete test suite.


## What did I learn?

I learned how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.


# How to review this project?

1. Clone this project using git: ```git clone https://github.com/vivekanaand1101/feedreader-tests.git```.
2. Go to the project: ```cd feedreader-tests```.
3. Run a server to serve the files: ```python3 -m http.server```. This opens a web server at [localhost:8000](http://localhost:8000).
4. Visit the server, The tests are run on page load.
