/*global $,document*/
(function () {
    "use strict";
    
    var posts =[];
    
    var TEMPLATE = "" +
        "<div class=\"post-preview\">\n" +
        "                    <a href=\"post.html\">\n" +
        "                        <h2 class=\"post-title\">\n" +
        "    POST-TITLE\n" +    
        "                        </h2>\n" +
        "                    </a>\n" +
        "                    <p class=\"post-meta\">Posted by <a href=\"#\">AUTHOR</a> on DATE</p>\n" +
        "                </div>\n" +
        "                <hr>\n";
    
    
    
    function displayPosts(list) {
        $('#postContainer').empty();
        var container = document.querySelector("#postContainer");

        list.forEach(function (article) {
            var html = TEMPLATE
                .replace("POST-TITLE", article.title)
                .replace("AUTHOR", article.author)
                .replace("DATE", article.date);
            var div = document.createElement("div");
            div.className = "col-lg-12";
            div.innerHTML = html;
            container.appendChild(div);
        });
    }
    
    $.getJSON("js/posts.json", function (data) {
        posts = data;
        displayPosts(posts);
    });
    
    
    $("#search").on("keyup", function (event) {
        event.preventDefault();
        var value = event.target.value.toLocaleLowerCase();
        if (value.length > 2) {
            var filtered = posts.filter(function (post) {
                return (post.title+" "+post.author).toLocaleLowerCase().indexOf(value) > -1;
            });
            displayPosts(filtered);
        }
        else {
            displayPosts(posts);
        }
    });

})();
