import type { AppProps } from 'next/app';
// 3rd import
import { Provider } from 'react-redux';
// local import;
import App from '@/package/asura/app/App';
import {
  persistor,
  store,
} from '@/package/asura/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function NextApp(props: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  );
}
