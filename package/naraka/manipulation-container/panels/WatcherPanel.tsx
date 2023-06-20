import * as React from 'react';
import { IWatcherPanelProps } from '../types';
import { useWatch, FieldValues } from "react-hook-form";
import useAsyncEffect from "@n1ru4l/use-async-effect";


export default function WatcherPanel<T extends FieldValues>(props: IWatcherPanelProps) {
  const watcher = useWatch<T>(); // when pass nothing as argument, you are watching everything

  useAsyncEffect(function* (onCancel, cast) {
    try {
      // Hành động được thực hiện mỗi khi WatcherPanel re-render
      console.log(watcher)
    } catch (error) {
      console.error('Error occurred:', error);
    }
  });

  return (
    <></>
  );
}
