alert("Hello World!");
getExcel();
postExcel();

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }

  alert(data)
}

function getExcel() {
  const url =
    "https://script.google.com/macros/s/AKfycbzAOQ9qlmSQJi9xgq_amop1ehsMuAxp83T0pltAnV0Mbdd0D2Iwwn6Fjm2bFT_Yh0gB/exec?sheetName=sheet&cell=A1";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",  // "application/json",
    },
  };
  fetchData(url, options);
}

function postExcel() {
  // GASのurl
  const url = "https://script.google.com/macros/s/AKfycbzAOQ9qlmSQJi9xgq_amop1ehsMuAxp83T0pltAnV0Mbdd0D2Iwwn6Fjm2bFT_Yh0gB/exec";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",  // "application/json",
    },
    body: JSON.stringify({
      sheet: "sheet",
      cell: "C1",
      value: "XXX",
    }),
  };
  fetchData(url, options);
}
