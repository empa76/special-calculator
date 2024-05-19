export const DEFAULT_API_URL = 'http://localhost:3000/api/v1/document'

export const API_URL =
  process.env.NODE_ENV === 'test'
    ? 'http://ledger-calculator-url'
    : DEFAULT_API_URL
