import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom'
import { TimeTrackerApp } from './TimeTrackerApp'
import { GeneralLoader } from './components/GeneralLoader';
import { store } from './store';
import './styles.css'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <GeneralLoader />
        <BrowserRouter>
          <TimeTrackerApp />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
) 
