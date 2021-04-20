import { createContext } from 'react'

interface CountContextData {
  total: number
  setTotal: (total: number) => void
}

const AppCtx = createContext<CountContextData>({} as CountContextData)

export default AppCtx
