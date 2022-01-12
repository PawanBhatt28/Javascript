const band = {
    bandName : "queen",
    favSong : "Bohemain Rhapsody",
    leadSinger : "Freddie Mercury"
}

const {bandName, favSong, leadSinger} = band;
console.log(bandName, favSong, leadSinger);

//below method will not work, we can olny extract values by giving exact name of key to the variables.

const {var1, var2, var3} = band;
console.log(var1, var2, var3);