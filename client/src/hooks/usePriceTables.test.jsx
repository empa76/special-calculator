import { renderHook, waitFor } from '@testing-library/react'
import usePriceTables from './usePriceTables'
import { fetchDocument } from '../services/documentService'
import { extractTablesData } from '../utils/priceTableData'

jest.mock('../services/documentService')
jest.mock('../utils/priceTableData')

describe('usePriceTables', () => {
  test('fetches document and extracts tables data', async () => {
    const mockData = { body: 'encodedHtml' }
    const mockExtractedData = {
      totalA: 10,
      totalB: 20,
      tableHtml: '<table></table>',
    }
    fetchDocument.mockResolvedValue(mockData)
    extractTablesData.mockReturnValue(mockExtractedData)

    const { result } = renderHook(() => usePriceTables())

    await waitFor(() => {
      expect(fetchDocument).toHaveBeenCalled()
    })

    expect(result.current.tablesHtml).toBeDefined()
    expect(result.current.totalAmountTableA).toBeDefined()
    expect(result.current.totalAmountTableB).toBeDefined()
  })

  test('handles error from API', async () => {
    fetchDocument.mockRejectedValue(new Error('API error'))

    const { result } = renderHook(() => usePriceTables())

    await waitFor(() => {
      expect(fetchDocument).toHaveBeenCalled()
    })

    expect(result.current.tablesHtml).toBe('')
    expect(result.current.totalAmountTableA).toBe(0)
    expect(result.current.totalAmountTableB).toBe(0)
  })
})
