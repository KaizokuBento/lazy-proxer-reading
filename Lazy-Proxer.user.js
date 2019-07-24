// ==UserScript==
// @name         Lazy Manga reading
// @namespace    https://github.com/KaizokuBento/
// @homepage	   https://github.com/KaizokuBento/lazy-proxer-reading
// @version      0.1
// @description  try to take over the world!
// @author       Bento
// @match        https://proxer.me/*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

$(document).keypress(function(e) {
  if(e.which == 48) {
    $('#main > div.inner > p > a:nth-child(1)').trigger('click');
  }
});

})(jQuery); //end of userscript
