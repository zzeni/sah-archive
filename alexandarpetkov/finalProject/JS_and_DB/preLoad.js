    // PRE-LOADER 

        // create a DIV which to see when waiting and give it class from CSS
    var newDiv = document.createElement("div");
    newDiv.className = 'preLoader';
    var image = document.createElement("div");
    image.className = 'preImg';

        // Append text - waiting
    var node = document.createElement('p');
    var textN = document.createTextNode('please wait...');
    node.appendChild(textN);
    newDiv.appendChild(node);
    node.className = 'wait';

        // append this DIV to body
    document.body.appendChild(newDiv);
    document.getElementsByClassName('preLoader')[0].appendChild(image);
        // set a TIMEOUT when DIV start to be invisible
    window.document.onload = setTimeout(function (){
        newDiv.style.display = 'none'; 
    }, 3000);   

    
    
    