// ==UserScript==
// @name         於X頁隨機選擇文章
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://forum.gamer.com.tw/B.php?page=*&bsn=60076
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var titles = document.getElementsByClassName('b-list__main');
    var targetUrl = titles[Math.floor(Math.random() * titles.length)].children[0].href;
    window.location.href = targetUrl;
})();