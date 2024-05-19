function calculateTotalAmount(table) {
  const rows = table.querySelectorAll('tr')
  let total = 0
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td')
    const amount = parseFloat(cells[1].textContent)
    total += amount
  }
  return total
}

function calculateTablesTotals(doc) {
  const tables = doc.querySelectorAll('table')
  const totalAmountTableA = calculateTotalAmount(tables[0])
  const totalAmountTableB = calculateTotalAmount(tables[1])

  return [totalAmountTableA, totalAmountTableB]
}

function extractTablesData(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const [totalA, totalB] = calculateTablesTotals(doc)
  const tableHtml = doc.body.innerHTML
  return { totalA, totalB, tableHtml }
}

export { extractTablesData }
