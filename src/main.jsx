import { StrictMode } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
  </StrictMode>,
)
