import { BrowserRouter } from 'react-router-dom'
import HomepageRouter from './routes/HomepageRouter'

function App() {
  return (
    <>
      <BrowserRouter>
        <HomepageRouter />
      </BrowserRouter>
    </>
  )
}

export default App
