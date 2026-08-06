import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import LazyLoadingLoader from './components/Loader/lazyLoadingLoader'


function App() {
  return (
      <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<LazyLoadingLoader />}>
          <ToastContainer/>
          <AppRoutes/>
        </Suspense>
      </Provider>
      </BrowserRouter>
  )
}

export default App
