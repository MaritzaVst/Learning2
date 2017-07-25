(function(){

    function tableCreate() {
        debugger;
        this.table = null;

        this.defaults = {
            id: "",
            className: "table-default",
            parent: "",
            url: "",
            filter: null,
            modal: null
        }

        if(arguments[0] && typeof arguments[0] === "object"){
            this.option = extend(this.defaults, arguments[0]);
        } else {
            this.option = this.defaults;
        }

        this.build();

        if (this.table.filter === true || Object.keys(this.table.filter).length) {
            this.searchBox = new SearchBox(this.defaults.filter);
            this.bindSearch();
        }
        if (this.table.modal === true || Object.keys(this.table.modal).length) {
            this.button();
        }
    }
    
    tableCreate.prototype.button = function(){
        var self = this;
        console.log(this);
        var openButton = document.createElement("a");
        openButton.className = "open-modal-btn waves-effect waves-light btn modal-trigger";
        openButton.innerText = "Añadir Datos";
        openButton.addEventListener("click", function() {
            self.modal = new Modal(self.defaults.modal);
            self.bindData();
        });
        document.getElementById(this.table.parent).appendChild(openButton);
    }
    tableCreate.prototype.build = function(){
        this.table = document.createElement("table");
        this.table.url = this.option.url;
        this.table.id = this.option.id;
        this.table.className = "table striped " + this.option.className;
        this.table.parent = this.option.parent;
        this.table.filter = this.option.filter;
        this.table.modal = this.option.modal;

        var self = this;
        if(this.table.url !== "") {
            $.getJSON(self.table.url , function(data){
                self.table.appendChild(self.theadStructure(data));
                self.table.appendChild(self.tbodyStructure(data));
                self.table.data = data;
            });

        } else {
            var message = document.createElement("tr").appendChild(document.createTextNode("No existen datos"));
            this.table.appendChild(message);
            
        }

        var docFrag = document.createDocumentFragment();
            docFrag.appendChild(this.table);
        
        if(this.table.parent !== "") {
            document.getElementById(this.table.parent).appendChild(docFrag);
        } else {
            document.body.appendChild(docFrag);
        }
        
    }

    tableCreate.prototype.tbodyStructure = function (data){
        var tbody = document.createElement("tbody"),
            tr, td, text;
        for(var i = 0; i < data.length; i++){
            tr = document.createElement("tr");

            for(var key in data[i]){
                if(key !== "Profile") {
                    td = document.createElement("td");
                    text = document.createTextNode(data[i][key]);
                    td.appendChild(text);
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
            }
        }
        return tbody;
        
    }
    tableCreate.prototype.theadStructure  = function (data) {
        var thead = document.createElement("thead"),
            tr = document.createElement("tr"),
            thContent = Object.keys(data[0]),
            th, text;
        for(var i = 0; i < thContent.length; i++){
            if(thContent[i] !== "Profile") {
                th = document.createElement("th");
                text = document.createTextNode(thContent[i]);
                th.appendChild(text);
                tr.appendChild(th);
                thead.appendChild(tr);
            }
        } 
        return thead;
    }
    tableCreate.prototype.bindData = function() {
        var self = this;
        this.modal.onSave(function(){
            var data = self.table.data;    
            var newList = new Object();
            var keys = Object.keys(data[0]).filter(function(i) { 
                return i !== "Profile";
            });
            var modalId = document.getElementById(self.modal.modal.id);
            var el = modalId.getElementsByClassName("row")[0];
            var elements = el.getElementsByTagName("input");
            for (var i = 0; i < elements.length; i++) {
                if(elements[i].value !== "") newList[keys[i]] = elements[i].value;               
            }

            if(Object.keys(newList).length) {
                data.push(newList);

                if(this.table.querySelector('tbody')){
                    this.table.removeChild(table.querySelector('tbody'))  
                }
    
                self.tbodyStructure(data);   
                table.appendChild(self.tbodyStructure(data));
            } else {
                alert("Llena al menos alguno de losa datos 7-7");
            }
        });
    }
    tableCreate.prototype.bindSearch = function() {
        var self = this;
        this.searchBox.onChange(function (text) {
            var dataJson2 = [];
            var data = this.table.data;
            if(this.table.querySelector('tbody')){
                this.table.removeChild(table.querySelector('tbody'))  
            }
            
            if(text !== ""){
                self.filterValueCompare(text, dataJson2, data);
                if (dataJson2.length) table.appendChild(self.tbodyStructure(dataJson2));   
            } else {
                table.appendChild(self.tbodyStructure(data));
            }
        });
    }

    tableCreate.prototype.filterValueCompare = function(value, dataJson2, data) {
        for(var i = 0; i < data.length; i++){
            for(var key in data[i]){
                if(key !== Object.keys(data[0])[0] && key !== Object.keys(data[0])[1]) {
                    text = data[i][key].toLowerCase();
                    if (text.indexOf(value) > -1) {
                        dataJson2.push(data[i]);
                        break;
                    }
                }
                
            }
        }
    }

    this.TableCreate = tableCreate;
}());