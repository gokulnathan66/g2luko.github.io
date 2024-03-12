var viewersCount = document.getElementById("viewers-number");

if (localStorage.getItem("viewersCount")) {

    var count = parseInt(localStorage.getItem("viewersCount"));
    count++;
    localStorage.setItem("viewersCount", count);
} else {
    localStorage.setItem("viewersCount", 1);
}


var viewersCount = document.getElementById("viewers-number");
viewersCount.textContent = localStorage.getItem("viewersCount");

function submitComment() {
    var commentInput = document.getElementById("comment");
    var comment = commentInput.value;

  var commentList = document.getElementById("comment-list");
    var newComment = document.createElement("div");
    newComment.textContent = comment;
    commentList.appendChild(newComment);

    commentInput.value = "";
}
