
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store,persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(

     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <div className='bg-gray-100'>

<App />
</div>
    </PersistGate>
    
  </Provider>
    

)
