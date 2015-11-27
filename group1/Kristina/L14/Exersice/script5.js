function Person (firstName, lastName){
    this.fName = firstName;
    this.lName = lastName;
    
    this.introduce = function () {
        return "Здравейте, казвам се " + this.fName + " " + this.lName + "!";
    }
}