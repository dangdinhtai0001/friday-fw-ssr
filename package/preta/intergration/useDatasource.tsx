import { useMemo } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { IDatasourceProps, IDatasourceReturn } from '../types/Datasource.d'


export default function useDatasource(props?: IDatasourceProps): IDatasourceReturn | null {
  if (!props) {
    return null;
  }

  const { url, fetcherOptions, swrOptions, transformData } = props;

  /**
   * Fetches data from the specified URL using Axios.
   * @param url - The URL to fetch the data from.
   * @returns The fetched data.
   * @throws If an error occurs during the fetch.
   */
  const fetcher = async (url: string) => {
    const headers = fetcherOptions?.headers || {};
    const method = fetcherOptions?.method || 'GET';
    const response = await axios.request({ url, headers, method, ...fetcherOptions });
    let data = response.data;

    // Extract and transform data using the combined function if provided
    return transformData ? transformData(data) : data;
  };

  // Sử dụng useMemo để tối ưu hiệu năng bằng cách tránh gọi lại hook useSWR khi swrOptions
  // không thay đổi. Điều này có thể cải thiện hiệu suất của ứng dụng trong trường hợp swrOptions 
  // có thể thay đổi một cách thường xuyên.
  const memoizedSwrOptions = useMemo(() => swrOptions, [swrOptions]);
  return useSWR(url, fetcher, memoizedSwrOptions);
};

