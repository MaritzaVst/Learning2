

(function(){
    function Modal(){
        this.modal = null;

        var defaults = {
            id: "modal2",
            className: "",
            content: ""
        }

        if(arguments[0]){
            if(typeof arguments[0] === "object") {
                this.option = extend(defaults, arguments[0]);
            } else if (arguments[0] === true) {
                this.option = defaults;
            }
        }
        
        
        this.buildModal();
        document.getElementsByClassName("open-modal-btn")[0].setAttribute("href", "#" + this.modal.id);
        Materialize.updateTextFields();
        $("#" + this.modal.id).modal();
    }

    Modal.prototype.buildModal = function(){
        this.modal = document.createElement("div");
        this.modal.id = this.option.id;
        this.modal.className = "modal " + this.option.className;

        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        modalContent.appendChild(this.buildFields());
        this.modal.parent = document.getElementsByTagName("body")[0];
        
        var footer = document.createElement("div");
        this.button = document.createElement("div");
        this.button.setAttribute("class", "modal-action modal-close waves-effect waves-green btn-flat");
        this.button.appendChild(document.createTextNode("Aceptar"));
        footer.appendChild(this.button);

        this.modal.appendChild(modalContent);
        this.modal.appendChild(footer);
        this.modal.parent.appendChild(this.modal);
    }

    Modal.prototype.buildFields = function(){
        var container = document.createElement("div");
        container.setAttribute("class", "row");
        var thead = document.getElementsByTagName("thead")[0];
        var keys = thead.getElementsByTagName("th");
        for(var i = 0; i < keys.length; i++){
            if(keys[i].textContent !== "Profile") {
                var inputContent = document.createElement("div");
                inputContent.setAttribute("class", "input-field col s4");
                var label = document.createElement("label");
                label.appendChild(document.createTextNode(keys[i].textContent));
                var input = document.createElement("input");
                input.setAttribute("class", "validate");
                input.setAttribute("type", "text");
                inputContent.appendChild(input);
                inputContent.appendChild(label);
                container.appendChild(inputContent);
            }
        }
        return container;
    }

    Modal.prototype.onSave = function(callback){
        var self = this;
        this.button.addEventListener("click", function(){
            callback();
            var inputs = document.getElementById("modal2").getElementsByTagName("input");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = ""
            }
        });
    }

    this.Modal = Modal;
}());
