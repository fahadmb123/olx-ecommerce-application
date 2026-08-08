import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import Loader from './components/Loader/Loader'
import HandleLoading from './components/HandleLoading'



function App() {
  
  return (
      <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <ToastContainer/>
          <HandleLoading />
        </Suspense>
      </Provider>
      </BrowserRouter>
  )
}

export default App
