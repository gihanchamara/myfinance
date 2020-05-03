// ==UserScript==
// @name         MyFinance
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sg.finance.yahoo.com/portfolio/*/view/*
// @match        https://finance.yahoo.com/portfolio/*/view/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource darkcss https://raw.githubusercontent.com/gihanchamara/myfinance/master/atomic-dark.7e389584.css
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    $(document).ready(function() {

        //Hide header
        $(".YDC-Header").css("display","none");
        $("#Lead-0-Ad-Proxy").css("display","none");
        $("#Lead-2-FeatureBar-Proxy").css("display","none");
        $("#Lead-2-FeatureBar-Proxy").css("display","none");
        $("#mrt-node-Lead-1-FinanceHeader").css("display","none"); //S&P Dow charts
        $("#Lead-3-Portfolios-Proxy > main > header").css("display","none"); // portfolio selector
        $("#render-target-default .finance.SG").css("margin-top","0px");

        //hide posts
        $($("#YDC-Col1")[0].parentNode).css("display","none")

        //debugger;
        //change theme
        var cssTxt = GM_getResourceText("darkcss");
        GM_addStyle(cssTxt);

    });

})();

