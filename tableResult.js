const data = [
//  {
//    "THUMBNAIL":"https://www.google.co.jp/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//    "NAME":"Google",
//    "URL":"https://www.google.co.jp/"},
//  {
//    "THUMBNAIL":"https://s.yimg.jp/images/top/sp2/cmn/logo-170307.png",
//    "NAME":"Yahoo",
//    "URL":"https://www.yahoo.co.jp/"},
  {
    "Aチーム":"キング",
    "Bチーム":"まーちゃん"},
  {
    "Aチーム":"ミサちゃん",
    "Bチーム":"鈴木さん"},
];

TableMaker.make({tableId: 'resultTable', json: data});
