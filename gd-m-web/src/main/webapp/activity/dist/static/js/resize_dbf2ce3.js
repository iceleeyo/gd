var calculatSeize=function(){var e=100,t=document.documentElement,n=t.clientWidth;n&&(t.style.fontSize=e*(n/640)+"px")};if(document.addEventListener){var resizeEvt="orientationchange"in window?"orientationchange":"resize";window.addEventListener(resizeEvt,calculatSeize,!1),document.addEventListener("DOMContentLoaded",calculatSeize,!1),calculatSeize()}