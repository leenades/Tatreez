$(document).ready(function(){
    var h3 = document.querySelectorAll("h3");
    for(let i=0; i< h3.length;i++){
        // orange
        h3[i].innerHTML = h3[i].innerHTML.replace(/\"/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\;/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\'/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\\/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\//g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\</g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\>/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\]/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\[/g, function(match) {
            return "<i style=color:#ee9a51;>" + match + "</i>"
        })
        // blue
        h3[i].innerHTML = h3[i].innerHTML.replace(/\(/g, function(match) {
            return "<i style=color:#7AE8F5;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\./g, function(match) {
            return "<i style=color:#7AE8F5;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\)/g, function(match) {
            return "<i style=color:#7AE8F5;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\|/g, function(match) {
            return "<i style=color:#7AE8F5;>" + match + "</i>"
        })
        //pink
        h3[i].innerHTML = h3[i].innerHTML.replace(/\-/g, function(match) {
            return "<i style=color:#f2b0d9;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\_/g, function(match) {
            return "<i style=color:#f2b0d9;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\x/g, function(match) {
            return "<i style=color:#f2b0d9;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\p/g, function(match) {
            return "<i style=color:#f2b0d9;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\+/g, function(match) {
            return "<i style=color:#f2b0d9;>" + match + "</i>"
        })
        h3[i].innerHTML = h3[i].innerHTML.replace(/\*/g, function(match) {
            return "<i style=color:#f2b0d9;>" + match + "</i>"
        })
    }
});