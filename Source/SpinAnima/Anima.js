var reAnima = function() {
    var oldView = document.getElementById("circleMenuWapper")
    var newOne = oldView.cloneNode(true);
    oldView.parentNode.replaceChild(newOne, oldView);
}