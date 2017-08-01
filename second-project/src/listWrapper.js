require("./table");
require("./cards");
var css = require("./main.css");

(function(){
    function listWrapper() {
        this.box = null;
        this.button = null;
        this.template = "<div class='js-add-list list-wrapper'>" +
                    "<form>"+
                        "<span class='placeholder js-open-add-list'>Añadir una lista...</span>"+
                        "<input class='list-name-input' type='text' name='name' placeholder='Añadir una lista...' autocomplete='off' dir='auto' maxlength='512'>"+
                        "<div class='list-add-controls u-clearfix'><a class='icon-lg icon-close dark-hover js-cancel-edit' href='#'>×</a></div>"+
                    "</form>"+
                "</div>";

        this.build(this.template);
    }
    
    listWrapper.prototype.build = function(template){
        debugger;
        var self = this;
        this.box = document.querySelector(".container-table-cards");  
        this.box.innerHTML = template;
        this.button = document.createElement("input");
        this.button.className = "js-save-edit";
        this.button.type = "submit";
        this.button.value = "Guardar";
        this.button.onclick = function(e){
            e.preventDefault();
            this.newTable = new tableCard;
        }
        
        document.querySelector(".list-add-controls").prepend(this.button);
        var addList = this.box.getElementsByClassName("js-add-list")[0];

        document.querySelector(".js-open-add-list").addEventListener("click", function(){
            addList.className += " active";
        });
        document.querySelector(".js-cancel-edit").addEventListener("click", function(e){
            e.preventDefault();
            addList.classList.remove("active");
        });
    }
    
    this.Trello = listWrapper;
    
}());