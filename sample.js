async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    
    const str = JSON.stringify(data);
    const parsed = JSON.parse(str);
    console.log(parsed.value);
    return parsed.value
  } catch (error) {
    console.error("Error:", error);
  }
}

function getExcel(sheet, cell) {
  const url =
    "https://script.google.com/macros/s/AKfycbzAOQ9qlmSQJi9xgq_amop1ehsMuAxp83T0pltAnV0Mbdd0D2Iwwn6Fjm2bFT_Yh0gB/exec?sheetName=" + sheet + "&cell=" + cell";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",  // "application/json",
    },
  };
  return fetchData(url, options);
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
