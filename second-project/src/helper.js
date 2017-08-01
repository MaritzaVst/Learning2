var closesByClass = function(el, clase){
    while (el.className != clase) {
        el = el.parentNode;
        if(!el){
            return null;
        }
    }

    return el;
}