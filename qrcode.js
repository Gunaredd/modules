import express from 'express';
import code from 'qrcode';
const app=express();
const port=5000;
app.get('/qrcode',(req,res)=>
{
    const url='https:://jbtechsolution.github.io/Home/';
    code.toDataURL(url,(err,qrCoderUrl)=>{
        if(err)
        {
            res.status(500),send('Internal server Error');
        }
        else{
            res.send(`
                <!DOCTYPE HTMl>
                <html>
                    <head>
                        <title>QR CODE GENERATOR</title>
                        <body>
                            <h1>QR Code Generator</h1>
                            <img src="${qrCoderUrl}"alt="QR Code">
                            <p>Scan the qr code to visit website</p>
                        </body>
                    </head>
                </html>
            `)
        }
    });
});
app.listen(port,()=>
{
    console.log('server is running on port ${port}');
});z