// ==UserScript==
// @name         FuckJudge
// @namespace    https://github.com/wfcrs/FuckJudge
// @version      0.11
// @description  try to take over the world!
// @author       btapple
// @match        *://judge.buaa.edu.cn/assignment/programList.jsp*
// @match        *://judge.e.buaa.edu.cn/assignment/programList.jsp*
// @grant        none
// @supportURL   https://github.com/wfcrs/FuckJudge/issues
// @updateURL    https://github.com/wfcrs/FuckJudge/raw/master/FuckJudge.user.js
// ==/UserScript==

(function() {
    'use strict';
    var a=document.querySelector("iframe[name='showmessage']");
    var b=a.getAttribute("src");
    var c=b.split("?")[1];
    var d=document.querySelector(".tableline2").querySelectorAll("tr");
    var input=document.createElement("input");
    var websitePrefix = window.location.href.match(/\/\/j.*\.buaa\.edu\.cn/i)[0]
    var e=websitePrefix+"/assignment/judgeDetailsRedirect.jsp?"+c;
    input.setAttribute("onclick","window.location.href='"+e+"'");
    input.setAttribute("value","烦死了")
    input.setAttribute("type","submit")
    d[1].querySelector("td").appendChild(input);
})();
