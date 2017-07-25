document.addEventListener("DOMContentLoaded", function(){
    debugger;
    var tableCreate = new TableCreate({
        "url": 'http://192.168.1.55/examenwebapi/api/person',
        "parent": "confe",
        "className": "table-inverse",
        "id": "table",
        "filter": {
            "parent": "search"
        },
        "modal": true
       
    });
});


/*
    modals.js
    - open()
    - onSave(data)
*/