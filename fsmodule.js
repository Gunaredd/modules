import{readFileSync,writerFileSync}from 'fs';

let fileContent=readFileSync{'./msg.txt','utf-8'};

console.log(fileContent)

let newFile='about random' : $(fileContent);
writeFileSync('newfile.txt',newFile,'utf-8');
console.log('data is written in a new file');