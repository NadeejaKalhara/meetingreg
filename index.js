const express = require('express')
var CryptoJS = require("crypto-js");
const path = require('path')
const request = require('request');
var bodyParser = require('body-parser');
var queue = require('express-queue');
var cors = require('cors');
const { json } = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use(queue({ activeLimit: 1, queuedLimit: -1 }));
var port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))

app.post('/zoom', function(req, res) {
  const BOT_TOKEN = '5403190293:AAEHtiIEaSVESqcIrRmN202eOm5niqZ5_hA'
const CHAT_ID = -1001615440082 // <YOUR_CHAT_ID>

const tmMsg = (text) => {
  const options = {
    method: 'POST',
    url: `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID,parse_mode:"HTML", text })
  };
  request(options, function (error, response) {
    if (!error) //throw new Error(error);
      console.log(response.body);
    else console.log(error);
  });
};

const pc = (sid,cid,pn) => {

  var today = new Date();
  var mn = today.getUTCMonth()+1;
   const options = {
    method: 'GET',
    url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/pay/`+cid+`/`+sid+`/`+mn+`.json`,
  };
  request(options, function (error, response) {
    if(response.body=='"ok"'){
      console.log("Paid")

      const getmid = (pn) => {
        const options = {
          method: 'GET',
          url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/zoomid/`+cid+`.json`,
        };
        request(options, function (error, response) {
    
        
   
 
      console.log(`https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/students/`+sid+`/name.json`)
            const stname = (tkna,zid) => {
              const options = {
                method: 'GET',
                url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/students/`+sid+`/name.json`,
              };
              request(options, function (error, response) {
                if(response.body=="null"){
                  res.send("No Such Student Registered")
                }else{
                  const zome = (tnm,tkna) => {
                    const options = {
                      method: 'POST',
                      url: `https://api.zoom.us/v2/meetings/`+zid+`/registrants`,
                      headers: { 'Content-Type': 'application/json',"Authorization":"Bearer "+tkna },
                      body: JSON.stringify({
                        "first_name": sid,
                        "last_name":tnm ,
                        "email": sid+"@aduruthuma.lk",
                        "state": "Sri Lanka",
                        "comments": "PAID CARD",
                        "job_title": "Student",
                        "org": "Aduruthuma LMS",
                        "language": "en-US",
                        "auto_approve": true
                      })
                    };
                    request(options, function (error, response) {
                    
                      
                      const dt = new Date();
        const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
        
        tsn = `${
            padL(dt.getMonth()+1)}/${
            padL(dt.getDate())}/${
            dt.getFullYear()} ${
            padL(dt.getHours())}:${
            padL(dt.getMinutes())}:${
            padL(dt.getSeconds())}`
        
            if (response.body.includes("zoom.us/w")){
              res.send( JSON.parse(response.body)["join_url"])
                    tmMsg(`<b>` + `New Student has been Sucessfully admitted to the class ` + JSON.parse(response.body)["topic"] + `</b>` + `\n` + `Class ID: ` + cid + `\n` + `Student Name: ` + sid + ` ` + tnm + `\n` + `Join URL: ` +   JSON.parse(response.body)["join_url"] + `\n` + `Timestamp: ` + tsn )}
                    else {
                      res.send(response.body)
                      tmMsg(response.body)
                    }
                      
                      if (!error) //throw new Error(error);
                        console.log(response.body);
                      else console.log(error);
                    });
                  };
                  
                  zome(JSON.parse(response.body)["name"],tkna)
                }
       
      
      
       
                if (!error) //throw new Error(error);
                  console.log(response.body);
                else console.log(error);
              });
            };
                  //ZOOM AUTH
      const gtk = (pnn,zid) => {
        const options = {
          method: 'POST',
          url: `https://zoomaccess.herokuapp.com/tk`,
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({pn:pnn})
        };;
        request(options, function (error, response) {
          if (response.body!='null'){  
            stname(response.body,zid);
          //succ
          } else{
            res.send("Invalid Tutor ID")
          }
         


          if (!error) //throw new Error(error);
            console.log(response.body);
          
          else console.log(error);
        });
      };
      gtk(pn,JSON.parse(response.body)["id"])
          
      
      
      
      
     
          
        ;
  
   
        });
      }
      getmid(pn);

  
    }
          if(response.body!='"ok"'){
      console.log("nopay")
      res.send("Class fees not paid")
      tmMsg("Unusual Activity detected from:"+sid+" - ")
    }
    if (!error) //throw new Error(error);
      console.log(response.body);
  
    else console.log(error);
  });
};

authid = "R6VzrAkdsXDAaEOT^Tob19O5@$9@V#$Ic&u!QCGR4LO$3&ktCV"
    console.log('receiving data ...');
    console.log('body is ',req.body);
    bb =  JSON.parse(JSON.stringify(req.body))
    console.log(bb["tk"].replace("'",'').replace('"',"").replace('"','').replace("'",''))
    temp = bb["tk"].replace("'",'').replace('"',"").replace('"','').replace("'",'')
    console.log(CryptoJS.AES.decrypt(temp, authid).toString(CryptoJS.enc.Utf8))
    outc = CryptoJS.AES.decrypt(temp, authid).toString(CryptoJS.enc.Utf8)
    aa =  JSON.parse(outc)
    
     console.log(aa["pn"])

     if(aa["pn"]!=undefined||aa["pn"]!=''){
    pc(aa["sid"],aa["cid"],aa["pn"])} else{
      res.send("Filed Errors - Unusual Activity")
      tmMsg("Crticial Unusual Activity - "+req.body )
    }
    ;
});

// start the server
app.listen(port);

console.log('Server started! At http://localhost:' + port);



