var likes = document.querySelectorAll("span.like-count");
var likeBtns = document.querySelectorAll(".like-btn");

for(var i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function(i){
        likes[i].innerHTML ++;
    }.bind(null, i));
}