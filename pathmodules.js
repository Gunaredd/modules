import {fileURLToPath} from 'url';
// import {dirname}from 'path';
import path from 'path';
import{readFile,writeFile}from 'fs';
const __filename=fileURLToPathj(import.meta.url);
const__dirname=path.dirname(__filename);
console.log(__dirname);
readFile(path.join(__dirname,'database','employees','emp.json'),'utf-8',(err,data)=>{
  if(err)throw err;
  let customers=JSON.parse(data);
  writeFile(path.join(__dirname,'util','customers.json'),JSON.stringify(customers),'utf'),'utf-8',(err,data)=>{
    if (err)throw err;
    console.log('Data written successfully');
  }
});
