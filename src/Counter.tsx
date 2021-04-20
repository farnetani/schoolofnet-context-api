import { useContext } from 'react'
import AppCtx from './Context'

interface CountContextData {
  total: number
  setTotal: (total: number) => void
}

export default function Counter() {
  const { total, setTotal } = useContext<CountContextData>(AppCtx)
  return (
    <div>
      <h4>{total}</h4>
      <button type="button" onClick={() => setTotal(total + 1)}>
        Somar pelo componente Counter
      </button>
    </div>
  )
}
