import { useState, useEffect } from 'react'
import { fetchDocument } from '../services/documentService'
import { extractTablesData } from '../utils/priceTableData'

export default function usePriceTables() {
  const [tablesHtml, setTablesHtml] = useState('')
  const [totalAmountTableA, setTotalAmountTableA] = useState(0)
  const [totalAmountTableB, setTotalAmountTableB] = useState(0)

  useEffect(() => {
    requestPriceTables()

    async function requestPriceTables() {
      try {
        const data = await fetchDocument()
        processDocument(data)
      } catch (e) {
        console.error('Error from API: ', e)
      }
    }

    function processDocument(data) {
      const decodedHtml = atob(data.body)
      const { totalA, totalB, tableHtml } = extractTablesData(decodedHtml)

      setTotalAmountTableA(totalA)
      setTotalAmountTableB(totalB)
      setTablesHtml(tableHtml)
    }
  }, [])

  return { tablesHtml, totalAmountTableA, totalAmountTableB }
}
