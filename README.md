monster-bank
============


## First Startup

1. Open a command prompt/terminal anywhere
2. Assuming node is installed, run `npm install -g yeoman`. This will install the yeoman script (scaffolding / file creator).
3. Run `npm install -g bower`. This will install the bower script (web package manager).
4. Go to the project directory and open a terminal there (trick in windows: go to the directory in explorer, and in the file path bar, replace everything with cmd and press enter. A prompt should open in that directory)
5. Run `npm install & bower install`

## Run server

1. Start the server with `grunt server`
2. Once that page opens, it will follow routes set up in app.js. To see the editor, change the url to `/#/editor`

## Directory & File Explanation

/.tmp/ : Temporary stash used for live reload and stuff (I think)
/node_modules/ : Local directory where node installs packages. 
/test/ : Unit Test directory. Can be ignored if you know not about Unit Testing

/app/ : Where that app's at
/app/index.html : Well, the index file. There is almost never a reason to modify it.
/app/scripts/ : Where you'll find the JS files
/app/scripts/app.js : The Main javascript file. It basically is the app setup
/app/scripts/controllers/ : Where controllers (app logic) goes
/app/styles/ : CSS
/app/views/ : The actual HTML people will see. Different "pages" of the app are loaded from here

## How to Make a new Page

In this example, we will be wanting to make a profile page for a monster. First off:

`yo angular:controller monsterProfile`

This will create both the test and controller, all while adding the latter to index.html. Afterward

`yo angular:view monsterProfile` will create the html view.

Finally, edit app.js and add a new route for the profile. For example:

```javascript
.when('/monsterProfile', {
        templateUrl: 'views/monsterProfile.html',
        controller: 'MonsterProfileCtrl' //Note, this is the name inside monsterProfile.js, not just MonsterProfile
      })
```

## Getting Started

Well you may want to edit editor.html
Look up Angular.JS's tutorials and such to learn how it tries to work, and write the HTML from there, filling in parts of editor.js as you go. Prioritize actually making the HTML, and THEN get the functionalities up.