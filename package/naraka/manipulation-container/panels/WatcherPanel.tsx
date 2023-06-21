import * as React from 'react';
import { IWatcherPanelProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { useWatch, FieldValues } from "react-hook-form";
import useAsyncEffect from "@n1ru4l/use-async-effect";


let mounted = false;
export default function WatcherPanel(props: IWatcherPanelProps) {
  const watcher = useWatch(); // when pass nothing as argument, you are watching everything
  const { context, contextApi } = useContainerContext();

  useAsyncEffect(function* (onCancel, cast) {
    try {
      if (mounted) {
        // Hành động được thực hiện mỗi khi WatcherPanel re-render
        // Kiểm tra và gọi hàm afterValueChange nếu nó tồn tại trong context
        if (context.afterValueChange && typeof context.afterValueChange === 'function') {
          context.afterValueChange(watcher, context, contextApi);
        }


      } else {
        mounted = true;
        // chạy sự kiện on mounted form ở đây
        if (context.onMounted && typeof context.onMounted === 'function') {
          context.onMounted(context, contextApi);
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }, [watcher]);

  return (
    <></>
  );
}
