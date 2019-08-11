// ==UserScript==
// @name        Sort a Rubric (ASU variation)
// @namespace   https://github.com/jamesjonesmath/canvancement
// @description This program allows the user to sort rubric criteria
// @include     https://canvas.asu.edu/courses/*/rubrics/*
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     2
// @grant       none
// ==/UserScript==
waitForKeyElements('.rubric_container.rubric.editing', attachRowSorter);
function attachRowSorter() {
  $('.rubric_table tbody').sortable({
    axis: 'y',
    containment: 'parent',
    items: '> tr'
  });
}

// Updated 20190604 by Prof. Prescott Perez-Fox
