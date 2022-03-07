var head = document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.onload = script.onreadystatechange = function() {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
        // help();
        // Handle memory leak in IE
        script.onload = script.onreadystatechange = null;
    }
};
script.src= 'ioc_loader.js';
head.appendChild(script);
