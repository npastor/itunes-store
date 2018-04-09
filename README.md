Frontend case-study
===================

Features
--------

* Create a microsite that displays music albums, and a detail view for each album
* Consume the iTunes API to get a list of albums to display, eg: (https://itunes.apple.com/search?term=Beatles&entity=album)
* In case you need additional API calls, have a look at the API docs at [https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
* Your layout should be responsive. Lay out items in a grid for desktop (see `itunes-desktop.png`), and in a list for smaller displays (see `itunes-mobile.png`).
* Upon clicking on an album, its details should be displayed. 
* In the details view, at least album cover, title, and track list should be included. Feel free to add additional information as you like.
* Make the list of albums sortable and filterable by title (client side).
* When you are in the details view of an album and hit "refresh" you should see the same details as before.

Prerequisites
----------------------

* Use Angular (not Angular JS) to implement the frontend.
* Use Sass/SCSS for styles.
* For the scope of this case study, it's good enough if the site displays correctly in a single, modern browser (eg. Chrome, Firefox, Edge, etc.). Please document which one you have been using during development.
* Add a `readme`-file to your project, and include these notes as well as your own.

Bonus points
------------
* unit tests, where they make sense
* transitions, animation
* web fonts




####################################################################

# To run the application, make sure you have node installed on your system, check using 'node -v'. If not, install using following steps :
	- Download the Windows installer from the 'https://nodejs.org/en/' web site.
	- Run the installer (the .msi file you downloaded in the previous step.)
	- Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
# Once node is installed, install the Angular CLI, if you haven't already done so by running 'npm install -g @angular/cli'.
# To start the application  run 'npm install' from within the project (/itunes-store) start the application by running command 'ng serve --o'. This will open the application @ http://localhost:4200/.

# application is tested on google Chrome
# application supports filtering and sorting 
	filtering : search by album name
	sorting : sorts asc or desc by clicking on Sort By link
# On clicking on any album, details view is opened.
# Music albums data and track information is coming from itune api.
# Following were implemented : Routing , Responsiveness using bootstrap , services , custom pipes, carousel.


