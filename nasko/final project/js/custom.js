/*global $,document*/
(function () {
    "use strict";
    
    var posts =[];
    
    //Use a template to load the posts
    var TEMPLATE = '' +
        "<div class=\"post-preview\">\n" +
        "                    <a href=\%URL%>\n" +
        "                        <h2 class=\"post-title\">\n" +
        "    %POST-TITLE%\n" +    
        "                        </h2>\n" +
        "                    </a>\n" +
        "                    <p class=\"post-meta\">Posted by <a href=\"../authors.html\">%AUTHOR%</a> on %DATE%</p>\n" +
        "                </div>\n" +
        "   <div class=\"ratings\">\n" +
        "      <p class=\"pull-right\">\Rating: ITEM-RATING </p>\n" +
        "      <p class=\"rating-background\">\n" +
        "        <span class=\"rating-stars\" style=\"width: RATING-PERCENTAGE%\"></span>\n" +
        "      </p>\n" +
        "    <button class=\"btn\" style=\"display:none\"></button>" +
        "   </div>" +
        "               <hr>\n";
    
    
    //Create a function that can compare options from a drop-down menu
    function compare(prop) {
        return function (a, b) {
            if (a[prop]< b[prop]){
                return -1;
            }
            else if (a[prop]> b[prop]){
                return 1;
            }

            else {
                return 0;
            }
        };
    }
    
    //Use the compare function to Sort the posts

    document.filtersForm.sortBy.addEventListener("change", function () {
        var selected = this.options[this.selectedIndex].text;
        if (selected === "Title descending") {
            posts.sort(compare('title'));
            posts.reverse();
        } else if (selected === "Title ascending") {
            posts.sort(compare('title'));
        } else if (selected === "Release date descending") {
            posts.sort(compare('release_date'));
            posts.reverse();
        } else if (selected === "Release date ascending") {
            displayPosts(posts);
            posts.reverse();
        } else if (selected === "Author ascending") {
            posts.sort(compare('author'));
        } else if (selected === "Author descending") {
            posts.sort(compare('author'));
            posts.reverse();
        }
        
        else if (selected === "Rating ascending") {
            posts.sort(compare('rating'));
        }
        else if (selected === "Rating descending") {
            posts.sort(compare('rating'));
            posts.reverse();
        }
        
        $("#collection").empty();
        displayPosts(posts);
    });
    
    //Replace the words from the template with the data from json file
    function displayPosts(list) {
        $('#postContainer').empty();
        var container = document.querySelector("#postContainer");

        list.forEach(function (article) {
            var rating = Math.round(article.rating * 20);
            var html = TEMPLATE
                .replace("%URL%", article.url)
                .replace("%POST-TITLE%", article.title)
                .replace("%AUTHOR%", article.author)
                .replace("%DATE%", article.date)
                .replace("ITEM-RATING", article.rating)
                .replace("RATING-PERCENTAGE", rating);
            var div = document.createElement("div");
            div.className = "col-lg-12";
            div.innerHTML = html;
            container.appendChild(div);
        });
    }
    //Use jquery to get the data
    $.getJSON("js/posts.json", function (data) {
        posts = data;
        displayPosts(posts);
    });
    
    //Use jquery to search by keyword
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
    
    
    //Add the functionality to submit posts
    
    function Post(title, author, date, rating) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.rating = rating;
    }
    //Replace the template with data that was submitted by the user
    Post.prototype.toHtml = function () {
        var rating = Math.round(this.rating * 20);
        return TEMPLATE
            .replace("%POST-TITLE%", this.title)
            .replace("%AUTHOR%", this.author)
            .replace("%DATE%", this.date)
            .replace("ITEM-RATING", this.rating)
            .replace("RATING-PERCENTAGE", rating);
    };
    //let javascript display the new post at the desired location
    function addPost(post) {
        var container = document.getElementById('collection');

        var box = document.createElement("div");
        var htmlContent = post.toHtml();

        box.className = "col-lg-12";
        box.innerHTML = htmlContent;

        box.querySelector("button").addEventListener("click", function() {
            container.removeChild(box);
        });

        container.appendChild(box);

    }
    //Display the post when Submit button is pressed
    function onFormSubmit(event) {
        event.preventDefault();

        var title = document.postGenerator.title.value;
        var author = document.postGenerator.author.value;
        var date = document.postGenerator.date.value;
        var rating = document.postGenerator.rating.value;

        var post = new Post(title, author, date, rating);

        addPost(post);
    }

    var form = document.postGenerator;

    form.addEventListener("submit", onFormSubmit);

})();
