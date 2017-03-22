# Portamento: 
## a synthesizer & sequencer social sharing site.
### site url: https://portamento.herokuapp.com

<img alt="GAMEBRAIN screenshot" src="http://i.imgur.com/jpgNysO.png?1" height="400px">

### Collaborators
  - Andy Beers
  - Tim Combs
  - William Nickerson
  - Niilo Smeds
  - Tom Timmel

### Repo Description
  - This repo contains the sources files for the front-end of the Portamento web app.
  - The sister repo, with the back end source files and the bundled front-end, lives at this url: https://github.com/Portamento-development/portamento-server


### Project Functionality

  - This is a Code Fellows PDX Full-Stack Javascript Bootcamp Project to create a browser-based synthesizer and sequencer with social sharing of synthesizer settings and ability to favorite patches and follow users.
  - Synth is the home page and displays the synthesizer and sequencer
  - User Profile displays:
    - patches created by the user
    - patches favorited by the user
    - other users followed by the user
  
  - Sign in/Sign up authentication
    - uses JWT for authentication
    - stores tokens in localStorage

### Directions to run and edit locally
  - Set up a portamento project directory that contains a directory for the front end and another directory for the back end:
    - portamento
      - portamento-app 
      - portamento-server

  - Download the repos

  - Get MongoDB running on your machine or use mLab (or something similar) to host a mongoDB database

  - 1 - start the back end
    - Open another terminal window, navigate to the app folder and at the CLI type: 
      ```
      npm start
      ```
  - 2 - start the front end (for local editing and testing)
    - Open another terminal window, navigate to the app folder and at the CLI type: 
      ```
      npm start
      ```
  - 3 - Then open a browser window and navigate to the address localhost:8080

  - Please refer to the app/package.json for info about app scripts
  - Please refer to the server/package.json for info about server scripts

### Collborations/Questions/issues
  - Always looking for suggestions and ideas for further development.
  - Any questions and concerns can be handled by opening an issue on the codebase.

### License
  - Licensed under the MIT license - see LICENSE for more info.
