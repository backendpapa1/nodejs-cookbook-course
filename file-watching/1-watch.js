

const fs = require('fs');
const moment = require('moment');



const file = "./file.txt";

fs.watchFile(file,(current,pevious) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ssa");
    return console.log(`${file} updated ${time}`);
})

fs.watch(file,(eventType,filename) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(eventType)
    return console.log(`${filename} updated ${time}`);

})
