import { Outlet, Route, Routes } from 'react-router'
import './App.css'
import './utility.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { ROUTES } from './utils/routes'

function App() {

  return (
    <main className='app'>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
