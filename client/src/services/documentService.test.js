jest.mock('../constants', () => ({ API_URL: 'http://mocked-api-url' }))

describe('documentService', () => {
  test('fetchDocument should return data from API', async () => {
    const data = { body: 'AcimaTestData' }
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: () => data })

    const { fetchDocument } = require('./documentService')
    const result = await fetchDocument()

    expect(result).toEqual(data)
  })

  test('fetchDocument should throw an error if API request fails', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: false, statusText: 'Not Found' })

    const { fetchDocument } = require('./documentService')
    await expect(fetchDocument()).rejects.toThrow('Not Found')
  })
})
