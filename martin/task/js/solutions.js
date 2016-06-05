"use strict";


function greeting (name) {
    
    return "Hello," + " " + name + "!";
    
};


function Person(firstName, lastName) {
    
    this.firstName = firstName;
    this.lastName = lastName;

};

function personGreeting(men, beFormal) {
    
    if(beFormal === true){
        
        
        
    }
    else {
    
    return "Hi, " + men.firstName + "!";
        
    }
};