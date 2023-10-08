"use strict"

// 1-) numberOfSeries nomli o’zgaruvchi yarating va unga “Nechta serial ko’rdingiz?” degan javobini qo’ying.

const seriesDB = {
    count : 0,
    series : {},
    actors : {},
    genres : [],
    privat : false,
    start : function () {
        this.count = +prompt("Nechta serial ko’rdingiz?",0,0);

        while(this.count == 0 || isNaN(this.count)){
            this.count = +prompt("Nechta serial ko’rdingiz?",0,0);
        }
    },
    feedBack: function(){
        if(this.count > 10){
            console.log("Siz serialchi zvezda ekansiz");
        }else if(this.count > 5){
            console.log("Siz classik tamoshabin ekansiz");
        }else{
            console.log("Kam serial ko’ripsiz");
        }
    },
    setRating : function(){
        for(let i = 0; i < 2 ; i++){
            let nameOfSeries = prompt("Oxirgi ko’rgan serialingiz?",'')
            let rating = prompt("Nechi baxo berasiz?",'')
            if(nameOfSeries != '' && rating !='' && nameOfSeries != null && rating != null){
                this.series[nameOfSeries] = rating;
                console.log("done");
            }else{  
                console.log("error");
                i--;
            }
        }
    },
    writeGenres:function(){
        let genres;
        for(let i = 0;i < 3;i++){
            genres = prompt(`Yaxshi ko'rgan janringiz ${i+1}`,"")
            if (genres != "" && genres != null){
                this.genres.push(genres)
            }else{
                console.log("error");
                i--;
            }
        }
        for(let i = 0;i<this.genres.length;i++){
            console.log(`Siz yoqtirgan janringiz #${i+1} - nomi ${this.genres[i]}`);
        }
    },
    showDB : function(){
        if(!this.privat){
            console.log(seriesDB);
        }else{
            console.log("db is private");
        }
    },
    visibleDB : function(){
        if(this.privat){
            this.privat = false;
        }else{
            this.privat = true
        }
    }
    
}

seriesDB.start();
seriesDB.feedBack();
seriesDB.setRating();
seriesDB.writeGenres();
seriesDB.showDB();


// startApp();
// sendFedback(numberOfSeries);
// writeRatingOfFilms(seriesDB);
// writeGenres();
// showDb(seriesDB);

function showDb(seriesDB){
    if(!seriesDB.privat){
        console.log(seriesDB);
    }else{
        console.log("db is private");
    }
}
function writeGenres(){
    let genres;
    for(let i = 0;i < 3;i++){
        genres = prompt(`Yaxshi ko'rgan janringiz ${i+1}`,"")
        if (genres != "" && genres != null){
            seriesDB.genres.push(genres)
        }else{
            console.log("error");
            i--;
        }
    }
}

function startApp(){
    numberOfSeries = +prompt("Nechta serial ko’rdingiz?",0,0);

    while(numberOfSeries == 0 || isNaN(numberOfSeries)){
        numberOfSeries = +prompt("Nechta serial ko’rdingiz?",0,0);
    }
    seriesDB.count = numberOfSeries;
}

function writeRatingOfFilms(seriesDB){
    for(let i = 0; i < 2 ; i++){
        let nameOfSeries = prompt("Oxirgi ko’rgan serialingiz?",'')
        let rating = prompt("Nechi baxo berasiz?",'')
        if(nameOfSeries != '' && rating !='' && nameOfSeries != null && rating != null){
            seriesDB.series[nameOfSeries] = rating;
            console.log("done");
        }else{  
            console.log("error");
            i--;
        }
    }
}

function sendFedback(numberOfSeries){
    if(numberOfSeries > 10){
        console.log("Siz serialchi zvezda ekansiz");
    }else if(numberOfSeries > 5){
        console.log("Siz classik tamoshabin ekansiz");
    }else{
        console.log("Kam serial ko’ripsiz");

    }
}




