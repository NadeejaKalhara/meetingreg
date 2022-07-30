const express = require('express')
const path = require('path')
const request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
const { json } = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

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

const pc = (sid,cid) => {
  var today = new Date();
  var mn = today.getUTCMonth();
  console.log(`https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/pay/`+cid+`/`+sid+`/`+mn+`.json`)
 
  const options = {
    method: 'GET',
    url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/pay/`+cid+`/`+sid+`/`+mn+`.json`,
  };
  request(options, function (error, response) {
    if(response.body=='"ok"'){
      console.log("Paid")

      //ZOOM AUTH
      const gtk = () => {
        const options = {
          method: 'GET',
          url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/zoomauth/`+encodeURIComponent(pn)+`.json`,
        };
        request(options, function (error, response) {
          cc = JSON.parse(response.body);
accid = cc["accid"]
console.log(accid)
bsix = cc["auth"]
console.log(bsix)
const getmid = () => {
  const options = {
    method: 'GET',
    url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/zoomid/`+cid+`.json`,
  };
  request(options, function (error, response) {
   tt = JSON.parse(response.body)
   console.log(tt["id"])
   zid = tt["id"]
   const zoth = () => {
  
    const options = {
      method: 'POST',
      url: `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=`+accid,
      headers: { 'Content-Type': 'application/json',
      'Authorization':"Basic "+bsix },
      body: JSON.stringify({ })
    };
    request(options, function (error, response) {
      tkna = JSON.parse(response.body)["access_token"]
console.log(`https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/students/`+sid+`/name.json`)
      const stname = () => {
        const options = {
          method: 'GET',
          url: `https://aduruthuma-lms-default-rtdb.asia-southeast1.firebasedatabase.app/students/`+sid+`/name.json`,
        };
        request(options, function (error, response) {
          tnm = JSON.parse(response.body)["name"]
          const zome = () => {
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
              joinl = JSON.parse(response.body)["join_url"]
              res.send(joinl)
              const dt = new Date();
const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

tsn = `${
    padL(dt.getMonth()+1)}/${
    padL(dt.getDate())}/${
    dt.getFullYear()} ${
    padL(dt.getHours())}:${
    padL(dt.getMinutes())}:${
    padL(dt.getSeconds())}`

              tmMsg(`<b>`+cname+`</b> New Student Registered. <b>Name: </b>`+tnm+`<b> Student ID: </b>`+sid+`<b> Join URL: </b>`+joinl+`<b> Class ID: </b>`+cid+`<b> Meeting ID: </b>`+zid+`<b> Meeting Topic: </b>`+JSON.parse(response.body)["topic"]+`<b> TimeStamp : </b>`+tsn )
              
              if (!error) //throw new Error(error);
                console.log(response.body);
              else console.log(error);
            });
          };
zome()

          console.log(tnm)
          if (!error) //throw new Error(error);
            console.log(response.body);
          else console.log(error);
        });
      };
    stname();




      if (!error) //throw new Error(error);
        console.log(response.body);
      else console.log(error);
    });
  };
  zoth();

    if (!error) //throw new Error(error);
    console.log(response.body);
    else console.log(error);
  });
}
getmid();
          if (!error) //throw new Error(error);
            console.log(response.body);
          
          else console.log(error);
        });
      };

      gtk();

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


    console.log('receiving data ...');
    console.log('body is ',req.body);
    aa =  JSON.parse(JSON.stringify(req.body))
     pn = aa["pn"]
     cname = aa["cname"]
    pc(aa["sid"],aa["cid"])
    ;
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);



