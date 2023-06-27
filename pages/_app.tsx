import type { AppProps } from 'next/app';
import AppProvider from '@/package/asura/app/AppProvider';

export default function NextApp(props: AppProps) {
  return <AppProvider {...props} />;
}
