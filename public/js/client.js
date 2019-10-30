document.addEventListener("load",function(e){

    window.onload = () => {
        'use strict';
      
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
                   .register('./ww.js');
        }
      }


})