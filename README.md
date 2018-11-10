# mexicoin

Mexicoin is a simple web page that allows you to check the FX rates based on the Mexican Peso.

## How to run
Open index.html file found in src/prod/html/ folder. 

##### If you want to build a production version from the development project, head to the dev directory,(/src/dev) install the dependencies(npm install) and execute "npm run gulp" command to build a production version with all the dependencies minified.

## Development tools
* Vue.js: Used to create the whole webpage because of the lightness of the framework.
* Gulp.js: Used to minify javascript and css files. Mainly used to generate a "production version" of the app.
* Animate.css: Used to animate components at rendering.
* c3.css: Used to graph the FX Rates.
* fixer.io: API used to get the FX Rates.

## Limitations
Given that fixer.io free tier only allows one request per date and does not show FX rates based on a specified coin(Default was EUR), the program had to manually fetch the FX rates of the last 30 days, convert the to MXN FX rates and store them. Because of this, the FX rates are accurate based on the rates of November 9th, 2018.