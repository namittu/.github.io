class TableMaker{
  // jsonはオブジェクトの配列
  static make({tableId = null, json = null, headers = []} = {}){
    const table = document.getElementById(tableId);
    if(typeof json === 'string') json = JSON.parse(json);
    table.innerHTML = this.build(json, headers);
  }

  static build(json, headers){
    const rows = json.map(row => {
      if(headers.length === 0) headers = Object.keys(row);
      const tdsStr = headers.map(h => {
        let v = row[h];
        if(h === 'THUMBNAIL') v = `<img src="${v}">`;
        return `<td class="${h}">${v}</td>`;
      }).join('')
      return `<tr>${tdsStr}</tr>`;
    });
    const thsStr = headers.map(h => `<th class="${h}">${h}</th>`).join('');
    const rowsStr = rows.join('');
    return `<thead><tr>${thsStr}</tr></thead><tbody>${rowsStr}</tbody>`;
  }
}


