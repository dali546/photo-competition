Photo Competition - Basic Framework
================================

The basic framework for the photo competition site includes:
- Directory structure to hold all the relevant files
- Simple structure for the *index* page and a placeholder for the *about* page.
- Small amount of CSS to arrange the pages
- JavaScript to fetch the image with jQuery

## Setup Instructions

1. Update the fields at the top of `js/common.js` with the correct `backendIp` and `user`.

## Development Instructions

### Viewing the site

Open `index.html` in a web browser and you should see your website.
If you can't see an image on the homepage, then check the [JavaScript Console](https://webmasters.stackexchange.com/a/77337) for error messages.

## Architecture

The project directory structure is:

* `html` - There is one HTML source file for every web page in your site and they define the structure of the site. 
* `stylesheets` - CSS stylesheets.
* `js` - JavaScript source files, these contain the logic of the application.  
* `js/vendor` - third-party javascript libraries, in our case this is the [JQuery](https://jquery.com/) library.
 
