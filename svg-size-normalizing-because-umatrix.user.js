// ==UserScript==

// @name Normalize SVGs size when styles are blocked.
// @name:de Normalisiert SVG Grafiken wenn, CSS blockiert ist.

// @description		For users with restrictive "uMatrix" settings there are annoying SVGs. This normalizes the size of SVGs to their "height" or to "1em" when "uMatrix" blocks stylesheets.
// @description:de	Für User die hohe Ansprüche an „uMatrix“ stellen und Stylesheets blocken, dürften das eine oder andere mal enorme SVG Grafiken aufgefallen sein. Dieses Script normalisiert die Größe auf ihr „height“ value oder auf „1em“ höhe.

// @downloadURL		https://github.com/cnleo/normalize/raw/master/svg-size-normalizing-because-umatrix.user.js
// @updateURL		https://github.com/cnleo/normalize/raw/master/svg-size-normalizing-because-umatrix.user.js

// @author		cnleo

// @namespace	cnleo/userscripts

// @grant none

// @match	<all_urls>

// @version	0.0.1

// @run-at document-start

// ==/UserScript==

if (!!document.styleSheets[0] && !!document.styleSheets[0].rules && document.styleSheets[0].rules.length > 0){
   // all fine; do nothing
   // possible there is an other userscript that appends a style with rules, in this case ... :/ 
   // TODO: observer for appended link/stylesheets to check his actually index; still zero or ?? 
}else{
  let svgs = document.querySelectorAll('svg');
  for(let i = 0, len = svgs.length; i < len; i++){
    let svg = svgs[i];
    svg.style.height = (svg.getAttribute('height') ? svg.getAttribute('height')+'px' : 1+'em');
  }
}