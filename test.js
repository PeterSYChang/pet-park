const fs = require('fs');
const { stringify } = require('querystring');
async function getHTML() {
  const res = await fetch(
    'https://mcstaging.shop.petpark.com.tw/appshare/h5TZ.html?type=inbox&openExternalBrowser=1'
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
