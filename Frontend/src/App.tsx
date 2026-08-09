import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import Loader from './components/Loader/Loader'
import AppRoutes from './routes/AppRoutes'




function App() {
  
  return (
      <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <ToastContainer/>
          <AppRoutes />
        </Suspense>
      </Provider>
      </BrowserRouter>
  )
}

export default App
