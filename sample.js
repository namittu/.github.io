alert("Hello World!")

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

const url =
  "https://script.google.com/macros/s/GASのデプロイID/exec?sheetName=シート名&cell=セル名";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
fetchData(url, options);


// GASのurl
const url = "https://script.google.com/macros/s/GASのデプロイID/exec";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    sheet: "シート名",
    cell: "セル名",
    value: "値",
  }),
};
fetchData(url, options);
