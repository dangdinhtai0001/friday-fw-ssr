import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistor, store } from '../store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

export default function AppProvider(props: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  );
}
