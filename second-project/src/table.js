(function(){
    function newTable() {
        this.table = null;
        this.buttonSave = null;

        this.template = 
                        "<div class='list-header js-list-header clearfix'>"+
                            "<textarea class='list-header-name' maxlength='512' readonly></textarea>"+
                            "<i class='material-icons btn-delete btn-delete-table'>close</i>"+
                        "</div>"+
                        "<div class='list-cards clearfix js-list-cards'>"+
                            "<div class='list-card'></div>"+
                            "<div class='card-composer'>"+
                                "<div class='list-card js-composer'>"+
                                    "<div class='list-card-details u-clearfix'>"+
                                        "<textarea class='list-card-composer-textarea js-card-title' dir='auto' style='overflow: hidden; word-wrap: break-word; resize: none; height: 54px;'></textarea>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='cc-controls clearfix'>"+
                                    "<a class='icon-lg icon-close dark-hover js-cancel' href='#'>×</a>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                        "<a class='open-card-composer js-open-card-composer hide' href='#'>Añadir una tarjeta...</a>";  
        
        this.createTable();     
    }

    newTable.prototype.createTable = function(){
        var self = this;
        this.table = document.createElement("div");
        this.table.setAttribute("class", "js-list list-wrapper" );
        this.buttonSave = document.createElement("input");
        this.buttonSave.className = "confirm js-add-card";
        this.buttonSave.type = "submit";
        this.buttonSave.value = "Añadir";

        var input = document.querySelector(".list-name-input"),
            textTitle = input.value,
            el = document.createElement("div");

        el.setAttribute("class", "list js-list-content");
        el.innerHTML = this.template;
        this.table.appendChild(el);
        document.querySelector(".container-table-cards").insertBefore(this.table, document.querySelector(".js-add-list"));
        
        el.getElementsByClassName("list-header-name")[0].value = textTitle;
        el.querySelector(".cc-controls").prepend(this.buttonSave);

        var textarea = el.querySelector(".list-card-composer-textarea");
        input.value = "";
        document.getElementsByClassName("js-add-list")[0].classList.remove("active");
        input.parentElement.parentElement.classList.remove("active");
        
        this.title = el.querySelector(".list-header-name");
        this.title.onclick = function() {
            debugger
            this.removeAttribute("readonly");
            // this.className += " edit";
        }
        this.buttonSave.onclick = function(e){
            e.preventDefault();
            var newCard = new Card(textarea);
            el.querySelector(".list-card").appendChild(newCard.card);
        }
        this.btnDelete = this.table.querySelector(".btn-delete-table");
        this.btnDelete.onclick = function(){
            self.table.remove();
        }
        this.addCardBtn = el.querySelector(".open-card-composer");
        this.addCardBtn.onclick = function(e){
            e.preventDefault();
            this.className += " hide";
            el.querySelector(".card-composer").classList.remove("hide");
        }

        this.deleteCardBtn = el.querySelector(".js-cancel");
        this.deleteCardBtn.onclick = function(){
            el.querySelector(".card-composer").className += " hide";
            self.addCardBtn.classList.remove("hide");
        }
    }

    this.tableCard = newTable;
}());