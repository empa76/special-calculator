import React from 'react'
import parse from 'html-react-parser'

export default function PriceTables({ html }) {
  return <div className="price-tables">{parse(html)}</div>
}
