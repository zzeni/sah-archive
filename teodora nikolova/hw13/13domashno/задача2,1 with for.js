var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
];



function findByAge(list, age) {
    // returns the name of the artist that has the given age
    var currentDate=new Date().getFullYear();
    var result=0;
    for(var i=0;i<list.length;i++){
        var haveperson=currentDate-list[i].born;

        if(haveperson===age){
            console.log(list[i].name);break;

        }

        else{
            result=(-1);
        }


    }
    return result;

}

console.log(findByAge(artists, 52)); // => "Tracy Chapman"
console.log(findByAge(artists, 34)); // => -1
