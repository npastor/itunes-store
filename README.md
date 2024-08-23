To run the application, make sure you have node installed on your system, check using 'node -v'. If not, install using following steps :
	- Download the Windows installer from the 'https://nodejs.org/en/' web site.
	- Run the installer (the .msi file you downloaded in the previous step.)
	- Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
 Once node is installed, install the Angular CLI, if you haven't already done so by running 'npm install -g @angular/cli'.
 To start the application  run 'npm install' from within the project (/itunes-store) start the application by running command 'ng serve --o'. This will open the application @ http://localhost:4200/.

 application is tested on google Chrome
 application supports filtering and sorting 
	filtering : search by album name
	sorting : sorts asc or desc by clicking on Sort By link
 On clicking on any album, details view is opened.
 Music albums data and track information is coming from itune api.
 Following were implemented : Routing , Responsiveness using bootstrap , services , custom pipes, carousel.


