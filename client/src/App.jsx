import './App.css'
import Header from './components/Header'
import Calculator from './components/Calculator'
import PriceTables from './components/PriceTables'
import usePriceTables from './hooks/usePriceTables'

function App() {
  const { tablesHtml, totalAmountTableA, totalAmountTableB } = usePriceTables()

  return (
    <div className="app">
      <Header />
      <PriceTables html={tablesHtml} />
      <Calculator
        totalAmountA={totalAmountTableA}
        totalAmountB={totalAmountTableB}
      />
    </div>
  )
}

export default App
