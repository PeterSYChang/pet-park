async function getHTML() {
  const res = await fetch(
    'https://shop.petpark.com.tw/appshare/h5TZ.html?type=inbox&openExternalBrowser=1'
  );
  const text = await res.text();
  console.log(text);
}
getHTML();
