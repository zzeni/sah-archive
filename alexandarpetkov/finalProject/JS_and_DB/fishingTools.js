(function(){
    'use strict';
    var allToolsSalt = [];
    var allToolsFresh = [];
    var allToolsSmall = [];
    $.getJSON('JS_and_DB/fishingTools.json', function(tool){
        var myTools = tool;
    
            // Generate a BOX 
        var myImages = '<div>'+
                            '<p>Name</p>'+
                            '<img src="source" />'+
                            '<p class="descr">info</p>'+
                          '</div>';
            
            // Generate different BOX for every kind creatures 
        $('<h1 class="heading"></h1><div class="toolsSaltW"></div>').appendTo('.images');
        $('<h1 class="heading"></h1><div class="toolsFreshW"></div>').appendTo('.images');
        $('<h1 class="heading"></h1><div class="toolsSmall"></div>').appendTo('.images');
        
        $('.images > h1:first-of-type').text('Такъми за морски риболов');
        $('.images > h1:nth-of-type(2)').text('Такъми за сладководен риболов');
        $('.images > h1:last-of-type').text('Аксесоари за риболов');
        
            // SORT 

            //Salt Water Tools
        var filteredToolsSalt = myTools.filter(function(tool){
            return (tool.category === "saltW tools");
        });

        filteredToolsSalt.forEach(function(oneFTool){
            var fishingTImage = myImages.replace('Name', oneFTool.name).
                                       replace('source', oneFTool.url).
                                       replace('info', oneFTool.info);
            allToolsSalt.push(fishingTImage);
        });
                //START WINDOW - start
        $('#mainNavigation li:first-of-type').addClass('colored');
        $('.toolsSaltW').append(allToolsSalt); 
        refresh();   
                // START WINDOW - end

        $('#mainNavigation li:first-of-type').on('click', function(){
            $('.toolsSmall').hide();
            $('.toolsFreshW').hide();
            $('.toolsSaltW').show();

            $('.toolsSaltW').empty(); 
            $('.toolsSmall').empty();    
            $('.toolsFreshW').empty(); 
            
            $(this).addClass('colored');
            $('.toolsSaltW').append(allToolsSalt);    
            ColorLi('#mainNavigation li:last-of-type', '#mainNavigation li:nth-of-type(2)');
            refresh();
        }); 
    
            //Fresh Water Tools
        var filteredToolsFresh = myTools.filter(function(tool){
            return (tool.category === "freshW tools");
        });

        filteredToolsFresh.forEach(function(oneFTool){
            var fishingImageFr = myImages.replace('Name', oneFTool.name).
                                       replace('source', oneFTool.url).
                                       replace('info', oneFTool.info);
            allToolsFresh.push(fishingImageFr);
        });

        $('#mainNavigation li:nth-of-type(2)').on('click', function(){
                $('.toolsSmall').hide();
                $('.toolsSaltW').hide();
                $('.toolsFreshW').show();

                $('.toolsSmall').empty();    
                $('.toolsSaltW').empty();    

                $(this).addClass('colored');
                $('.toolsFreshW').append(allToolsFresh);  
                ColorLi('#mainNavigation li:first-of-type', '#mainNavigation li:last-of-type');
                refresh();
        });     

            //Small Tools
        var filteredToolsSmall = myTools.filter(function(tool){
            return (tool.category === "small tools");
        });

        filteredToolsSmall.forEach(function(oneFTool){
            var fishingImageSm = myImages.replace('Name', oneFTool.name).
                                       replace('source', oneFTool.url).
                                       replace('info', oneFTool.info);
            allToolsSmall.push(fishingImageSm);
        });

        $('#mainNavigation li:last-of-type').on('click', function(){
                $('.toolsSaltW').hide();
                $('.toolsFreshW').hide();
                $('.toolsSmall').show();

                $('.toolsFreshW').empty();    
                $('.toolsSaltW').empty();   

                $('.toolsSmall').append(allToolsSmall);
                $(this).addClass('colored');
                ColorLi('#mainNavigation li:first-of-type', '#mainNavigation li:nth-of-type(2)');
                refresh();
        });   
                // remove background-color of not selected Li
        function ColorLi(notClickedLi1, notClickedLi2){
            if ($(notClickedLi1).attr('class') === 'colored' || $(notClickedLi2).attr('class') === 'colored'){
                $(notClickedLi1).removeClass('colored');
                $(notClickedLi2).removeClass('colored');
            }
        }


                // FULL image on click
        $('#full').css({
            width: '100%',
            height: '100%',
            background: 'rgba(51,51,51,0.8)',
            position: 'fixed',
            'padding': '2%',
            'text-align': 'center',
            top: '0',
            'z-index': '1000' 
        }).hide();
        $('<img class="myBigImg"/>').appendTo('#full').css({
                    psoition: 'relative',
                    'max-width': '100%',
                    'max-height': '100%',
        });
        
        function refresh(){     
            var showMe = true;
            $('img').on('click', function() {
                if(showMe) {
                    $('#full').show();
                    $('.myBigImg').attr('src', this.src);
                    // showMe = false;
                } else {
                    $('#full').hide();
                    // showMe = true;
                }
            });

            $('#full').on('click', function() {
                $(this).hide();
            });
        }
    });
            // Back to FIRST page

    $('#backTofirstP').on('click', function(){
        window.location.href = "../index.html";
    });
    
           // GO to TOP smooth

    $('#GoTop').click(function(){
        $('body').animate({scrollTop : 0},400);
    });
})();



