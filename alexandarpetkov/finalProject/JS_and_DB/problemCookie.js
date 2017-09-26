

 
 $.getJSON('JS_and_DB/sign-in-people.json', function(dataUser){
        var searchUser = dataUser;  // взимам си USER-ите от JSON-а, които вече направени за да сравнявам с тях

        $('main section article:last-of-type header').append('<p></p>'); // апендвам си <p> за да пиша грешката ако не се оцели парола или юзър

        $('main article:last-of-type input[type="submit"]').on('click', singInOut); // на клик да се изпълни функцията 

        function singInOut(event){
            event.preventDefault();  // привентвам презареждането на екрана
            var userNInput = $('main section article:last-of-type input:first-of-type'); // хващам си USERname инпута
            var passWInput  = $('main section article:last-of-type input:nth-of-type(2)'); // хващам си PASSword инпута
            // console.log('sashop');
            searchUser.forEach( function(element){           // проверявам дали има такива име и парола в списъка (JSON) 

                if(element.username === userNInput.val() && element.password === passWInput.val()){ // ако ИМЕТО и ПАРОЛАТА съвпадат - влиза в акаунта
                    var butOut = $('<button class="sign3">SING OUT</button>').css({                 // правя бутон за ИЗХОДи го променям малко 
                                                                            'margin-left': '20px',
                                                                            'display': 'block',
                                                                            });

                    $(butOut).appendTo('main section article:first-of-type p');    // закачам бутона за изход, където му е мястото
                    // console.log('this is true FULL user');
                    $('<h2>Здравейте '+ element.username +' !</h2>').appendTo('main section article:first-of-type'); //Wellcome съобщение
                    $('main section article:last-of-type p:last-of-type').hide(); // скривам съобщението за грешка (иначе, като излезна пак ще стои на формта)
                    $('main section article:last-of-type').hide(); // скривам формата за LOG-ване
                    $('.sign1').hide(); // скривам бутона за log-in
                    $('.sign2').hide(); // скривам бутона за sign-up
                    $('main section article:last-of-type header p').text(''); // изтривам текста за грешка във формата
                    
                    // ADD COOKIE
                    function createCookie(){   // правя cookie с името от полето на формата
                        var nameCookie = $('#signIN input:first-of-type').val();
                        var thisDate = new Date();
                        thisDate.setTime(thisDate.getTime() + 1000*60*60*24*365);
                        var oneYear = thisDate.toUTCString();
                        document.cookie = 'name='+ nameCookie +';expires=' + oneYear + ';path=/';
                    }



                    function getCookie(nameCookie) {
                        var name = nameCookie + "=";
                        var cookieName = document.cookie.split(';');
                        
                        for(var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1);
                            }
                            if (c.indexOf(name) == 0) {
                                return c.substring(name.length, c.length);
                            }
                        }
                        return "";
                    }

                    function checkCookie() {
                        var user=getCookie("username");
                        if (user != "") {
                            alert("Welcome again " + user);
                        } else {
                           user = prompt("Please enter your name:","");
                           if (user != "" && user != null) {
                               setCookie("username", user, 30);
                           }
                        }
                    }

                createCookie();  // правя cookie


                } else {
                    // console.log('please enter valid NAME and PASSWORD');
                    $('main section article:last-of-type header p').text('Please try again. No such USER or PASSWORD'); // слагам текст за неправилно име или парола
                    $('main section article:last-of-type p:last-of-type').css({     // малко CSS промени
                                                                    'color': 'red', 
                                                                    'text-align': 'center'});
                }
                $('.sign3').on('mouseover').css('cursor', 'pointer'); //правя курсора да е пойнтър
                
                $('.sign3').on('click', function(){         // когато излезна да се появяват преди това скритите неща
                    $(this).hide();
                    $('main section article:first-of-type h2').hide();      
                    $('main section article:last-of-type').show();
                    $('.sign1').show();
                    $('.sign2').show();
                    $('main section article:last-of-type header p').show();
                });
                $('.sign2').on('click', function (){                // ако сменя екрана от SIGN-IN на SIGN-UP трия съобщението за грешка
                    $('main section article:last-of-type header p').text('');
                });
            });
        }

});
$(document).ready(checkCookie()); // извиквам проверка за наличие на cookie, когато зареди
