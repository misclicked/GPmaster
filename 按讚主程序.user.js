// ==UserScript==
// @name         按讚主程序
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://forum.gamer.com.tw/C.php?*bsn=60076*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var mainGPs = document.getElementsByClassName('ef-btn ef-firework tippy-gpbp');
    var expendReplys = document.getElementsByClassName('more-reply');
    var i, targetUrl;
    var nextBtns = document.getElementsByClassName('next');
    var b = document.getElementsByTagName('p')
    var iframe = document.createElement('iframe');
    var iframeReady = false
    function waitIframe() {
        if(iframeReady==false) {
            setTimeout(waitIframe, 100);
            return;
        }
        if(b[0].textContent == '無此討論串'){
            targetUrl = 'https://forum.gamer.com.tw/B.php?page='+(Math.floor(Math.random() * 50)+1)+'&bsn=60076'
            window.location.href = targetUrl;
        }
        for(i=0;i<expendReplys.length;i++){
            expendReplys[i].click();
        }
        var subGPs = document.getElementsByClassName('gp');
        var users_comment = document.getElementsByClassName('reply-content__user');
        var users_lz = document.getElementsByClassName('userid');
        for(i=0;i<users_comment.length;i++){
            iframe.contentWindow.home_say_hello(users_comment[i].href.substr(users_comment[i].href.lastIndexOf('/') + 1));
        }
        for(i=0;i<users_lz.length;i++){
            iframe.contentWindow.home_say_hello(users_lz[i].href.substr(users_lz[i].href.lastIndexOf('/') + 1));
        }
        for(i=0;i<subGPs.length;i++){
            subGPs[i].click();
        }
        for(i=0;i<mainGPs.length;i++){
            mainGPs[i].children[0].click();
        }
        if(nextBtns[0].className == 'next no'){
            targetUrl = 'https://forum.gamer.com.tw/B.php?page='+(Math.floor(Math.random() * 50)+1)+'&bsn=60076'
            window.location.href = targetUrl;
        }else{
            nextBtns[0].click();
        }
        return;
    }
    iframe.style.display = "none";
    iframe.src = 'https://home.gamer.com.tw/homeindex.php';
    document.body.appendChild(iframe);
    iframe.contentWindow.addEventListener('DOMContentLoaded', function() {
        iframeReady = true;
    }, false);
    waitIframe();
})();