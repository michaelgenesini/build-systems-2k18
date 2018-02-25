(function () {
'use strict';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@font-face {\n  font-family: 'Montserrat';\n  /* Import a FONT file */\n  src: url(\"./static/fonts/Montserrat-Regular.otf\"); }\n\nbody {\n  font-family: 'Montserrat';\n  font-weight: bolder;\n  background-color: #2EFCFD;\n  color: #DE26DF;\n  padding: 0;\n  margin: 0;\n  text-align: center; }\n\n/* Import another CSS file */\n.parrot {\n  width: 300px;\n  height: 300px;\n  margin: 0 auto;\n  /* Reference an image file */\n  background: url(\"./static/imgs/partyparrot.gif\") no-repeat center center; }\n";
styleInject(css);

/**
 * Says hello.
 * @param  {String} name a name
 * @return {String}      a greeting for `name`
 */
function sayHelloTo(name) {
  var toSay = "Hello, " + name + "!";

  return toSay;
}

/**
 * Adds all the values in an array.
 * @param  {Array} arr an array of numbers
 * @return {Number}    the sum of all the array values
 */
var addArray = function addArray(arr) {
  var result = arr.reduce(function (a, b) {
    return a + b;
  }, 0);

  return result;
};

var DATA = {
    firstName: 'Parrot',
    lastName: 'Party'
};

var firstName = DATA.firstName,
    lastName = DATA.lastName;

console.log('Hello ' + firstName + ' ' + lastName + '!');

// Run some functions from our imported modules.
var result1 = sayHelloTo('Party Parrot');
var result2 = addArray([1, 2, 3, 4]);

// Print the results on the page.
var printTarget = document.getElementById('test');

printTarget.innerText = 'sayHelloTo(\'Party\') => ' + result1 + '\n\n';
printTarget.innerText += 'addArray([1, 2, 3, 4]) => ' + result2;

}());
//# sourceMappingURL=bundle.js.map
