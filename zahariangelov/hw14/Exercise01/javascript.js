
            let array = [2, 14, 6, 24, 8]
            var bool = "true";
        
            //Първата функция с for цикъл
        function forCheckEven(array) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 != 0) {
                    bool = "false";
                    break;
                }
                    
                else {
                        bool = "true";
                }
            }
                return bool;
        }
            
            console.log(forCheckEven(array));
        
        //Втората функция са while цикъл
        function whileCheckEven(array) {  
            var i = 0;
            while(i < array.length) {
                if (array[i] % 2 != 0 ) {
                    bool = "false";
                    break;
                }
                
                i++;
            }
            
            return bool;
        }
            console.log(whileCheckEven(array));
            
            
            
        //Третата функция с do/while
        function doCheckEven(array) {
            var i = 0;
            do {
                if (array[i] % 2 != 0 ) {
                    bool = "false";
                    break;
                }
                
                i++;   
            }
            
            while (i < array.length);
            
            return bool;
        }
            
        console.log(doCheckEven(array));