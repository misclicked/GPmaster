// ==UserScript==
// @name         Missing Page Handling
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.gamer.com.tw/missing.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var targetUrl = 'https://forum.gamer.com.tw/B.php?page='+(Math.floor(Math.random() * 50)+1)+'&bsn=60076'
    window.location.href = targetUrl;
})();