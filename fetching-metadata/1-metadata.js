
const fs = require('fs');
// argv returns array of cmdl arguements starting with index 0
const file = process.argv[2];



function printMetadata(file){
    try{
        const fileStats = fs.statSync(file);
        console.log(fileStats);
    }catch (e) {
        console.log('err')
    }
}

printMetadata(file);


//Stats {
//   dev: 16777220, device identifier that holds the file
//   mode: 33188, access permission
//   nlink: 1, numbers of hard links
//   uid: 502, user identifier
//   gid: 20,group identifier
//   rdev: 0, device identifier of the device file
//   blksize: 4096, filesystem block size
//   ino: 12894392946, lnode number
//   size: 11, total byte
//   blocks: 8, number of 512 byte blocks allocated
//   atimeMs: 1670766518990.6128, last access time in ms
//   mtimeMs: 1670766518020.5498, last modified time in ms
//   ctimeMs: 1670766518020.5498, last status change time in ms
//   birthtimeMs: 1670766503723.5493, file creation time in ms
//   atime: 2022-12-11T13:48:38.991Z, last access time
//   mtime: 2022-12-11T13:48:38.021Z,last modified time
//   ctime: 2022-12-11T13:48:38.021Z,last status change time
//   birthtime: 2022-12-11T13:48:23.724Z file creation time in ms
// }
