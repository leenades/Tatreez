$(document).ready(function(){
    var h3 = document.querySelectorAll("h3");
    for(let i=0; i< h3.length;i++){
        h3[i].innerHTML = h3[i].innerHTML.replace(/\"/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
    }
});