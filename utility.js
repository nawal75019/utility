var log, byId, selector, selectAll;


log = function log (val){
    "use strict";
    console.log("ready");

};

byId = function byId(id) {
    "use strict";
    return document.getElementById(id);
    
};


selector = function select(sCSS){
    "use strict";
    return document.querySelector(sCSS);
};


selectAll = function selectAll(sCSS) {
    "use strict";
    return document.querySelectorAll(sCSS);
};