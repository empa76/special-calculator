describe('priceTableService', () => {
  test('extractTablesData should return total amounts and tables html', () => {
    const html = `
      <h2>Table A</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>10.20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3.30</td>
          </tr>
        </tbody>
      </table>
      <h2>Table B</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2.30</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1.70</td>
          </tr>
        </tbody>
      </table>
    `.replace(/\s+/g, '')

    const { extractTablesData } = require('./priceTableService')
    const { totalA, totalB, tableHtml } = extractTablesData(html)

    expect(totalA).toBe(13.5)
    expect(totalB).toBe(4)
    expect(tableHtml).toBe(html)
  })
})
