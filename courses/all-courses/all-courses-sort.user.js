// ==UserScript==
// @name        All Courses Sort
// @namespace   https://github.com/jamesjonesmath/canvancement
// @description Allows sorting on any column of the All Courses list
// @include     https://*.instructure.com/courses
// @require     https://cdn.jsdelivr.net/npm/tablesorter@2.31.1/dist/js/jquery.tablesorter.combined.min.js
// @version     3
// @grant       none
// ==/UserScript==
(function() {
  'use strict';
  if (/^\/courses\/?$/.test(window.location.pathname)) {
    if (typeof $.tablesorter === 'object') {
      sortAllCourses();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/tablesorter@2.31.1/dist/js/jquery.tablesorter.combined.min.js';
      script.onload = sortAllCourses;
      document.head.append(script);
    }
    function sortAllCourses() {
      const el = document.createElement('style');
      document.head.appendChild(el);
      const styleSheet = el.sheet;
      const css = [ '.tablesorter .filtered { display: none; }', '.tablesorter-filter-row td { margin: 0; padding: 0 0.5rem; }',
          'input.tablesorter-filter { margin: 0.25rem 0; padding: 0.2rem; width: 90%; }' ];
      for (let i = 0; i < css.length; i++) {
        styleSheet.insertRule(css[i], i);
      }
      document.querySelectorAll('table.ic-Table th.course-list-star-column').forEach(function(e) {
        e.classList.add('filter-false');
      });
      $('table.ic-Table').tablesorter({
        'widgets' : [ 'filter' ],
        // 'sortList' : [[3,1]],
        'cssIconAsc' : 'icon-mini-arrow-up',
        'cssIconDesc' : 'icon-mini-arrow-down',
        'headerTemplate' : '{content}{icon}',
      });
    }
  }
})();
