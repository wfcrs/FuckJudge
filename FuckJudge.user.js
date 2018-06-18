// ==UserScript==
// @name         FuckJudge
// @namespace    https://github.com/wfcrs/FuckJudge
// @version      0.13
// @description  Screw judge.
// @author       btapple && rynco
// @match        *://judge.buaa.edu.cn/assignment/programList.jsp*
// @match        *://judge.e.buaa.edu.cn/assignment/programList.jsp*
// @grant        none
// @supportURL   https://github.com/wfcrs/FuckJudge/issues
// @updateURL    https://github.com/wfcrs/FuckJudge/raw/master/FuckJudge.user.js
// ==/UserScript==

(function() {
  function a() {
    // var a = document.querySelector("iframe[name='showmessage']")
    var b = a.getAttribute('src')
    var c = b.split('?')[1]
    // var d = a.contentDocument.querySelector(
    //   'body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)'
    // )
    var input = document.createElement('a')
    var submitButton = document.querySelector('#Submit');
    var websitePrefix = window.location.href.match(/\/\/j.*\.buaa\.edu\.cn/i)[0]
    var e = websitePrefix + '/assignment/judgeDetailsRedirect.jsp?' + c
    input.setAttribute('href', e)
    input.innerHTML = '烦死了'
    submitButton.after(input)
    submitButton.after(' ')
  }

  setTimeout(a, 500)

  // submitButton.onClick = ()=>{setTimeout(a, 1500)};
})()
