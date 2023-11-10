const fs = require('fs');
async function getHTML() {
  const res = await fetch(
    'https://mcstaging.shop.petpark.com.tw/appshare/h5TZ.html?type=inbox&openExternalBrowser=1&fbclid=IwAR2RQitoumb3u1MQJ-T3-h8wIorM5XVDy0GH2FCeZc1mgE6N-uEaSS7exK8'
  );
  const text = await res.text();

  console.log(text);

  fs.writeFile('index.html', text, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
getHTML();
