require("./helper");
(function(){
    function Card() {
        this.card = null;
        this.template = "<textarea class='list-card-title js-card-name' readonly></textarea>"+
                        "<i class='material-icons btn-edit-card'>mode_edit</i>"+
                        "<i class='material-icons btn-delete-card'>close</i>";
        this.argument = arguments[0];

        this.build();
    }
    Card.prototype.build = function(){
        var self = this,
            textarea = this.argument,
            value = textarea.value,
            docFrag = document.createDocumentFragment();

        this.card = document.createElement("div");
        this.card.className = "list-card-details card-detail"; 
        this.card.innerHTML = self.template;
        this.card.getElementsByClassName("js-card-name")[0].value = value;
        
        this.editCard = this.card.querySelector(".btn-edit-card");
        this.editCard.onclick = function(){
            self.card.querySelector(".list-card-title").removeAttribute("readonly");
        }
        this.deleteCard = this.card.querySelector(".btn-delete-card");
        this.deleteCard.onclick = function(){
            self.card.remove();
        }

        textarea.value = "";
        docFrag.appendChild(this.card);

        return docFrag;
    }

    this.Card = Card;
}());

