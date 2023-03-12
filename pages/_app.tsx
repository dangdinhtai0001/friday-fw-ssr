import type { AppProps } from 'next/app';
// 3rd import
import { Provider } from 'react-redux';
// local import;
import { store } from '@/package/asura/store/configureStore';

import App from '@/package/asura/app/App';

export default function NextApp(props: AppProps) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}
