import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
      <BrowserRouter>
      <Provider store={store}>
        <ToastContainer/>
          <AppRoutes/>
      </Provider>
      </BrowserRouter>
  )
}

export default App
