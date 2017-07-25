(function (){

    function SearchBox() {
        this.input = null;
        var defaults = {
            className: 'form-control',
            width: 100,
            height: 40,
            placeholder: "Ingresar texto",
            id: "myInput",
            parent: document.body,
            onkeyup: function(){},
            data: ""
        }
        if(arguments[0]){
            if (typeof arguments[0] === "object") {
                this.option = extend(defaults, arguments[0]);
            }
            else if (arguments[0] === true) {
                this.option = defaults;
            } 
        }

        this.build();
             
    }
      
    SearchBox.prototype.build = function() {
        var self = this;
        this.input = document.createElement("input");
        this.input.id = this.option.id;
        this.input.className = "form-class" + " " + this.option.className;
        this.input.placeholder = this.option.placeholder;
        this.input.type = "text";
        this.input.style.width = this.option.width + "%";
        this.input.style.height = this.option.height + "px";
        this.input.parent = this.option.parent;
        this.input.data = this.option.data;

        var docFrag = document.createDocumentFragment(),
            parent;
        
        if(typeof this.input.parent !== "object"){
            parent = document.getElementById(this.input.parent);
        } else {
            parent = this.input.parent;
        }
        
        docFrag.appendChild(this.input);
        parent.appendChild(docFrag);

    }

    SearchBox.prototype.onChange = function (callback) {
        this.input.onkeyup = function (){
            callback(this.value)
        }
    }
    
    this.SearchBox = SearchBox;
}());