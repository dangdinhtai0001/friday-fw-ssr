import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios';
import { IDatasourceProps, IDatasourceReturn } from './types/Datasource.d'


export default function useDatasource(props: IDatasourceProps): IDatasourceReturn {
  const { url, fetcherOptions, swrOptions, transformData, dataExtractor, onError } = props;
  const { headers } = fetcherOptions || {};

  /**
   * Fetches data from the specified URL using Axios.
   * @param url - The URL to fetch the data from.
   * @returns The fetched data.
   * @throws If an error occurs during the fetch.
   */
  const fetcher = async (url: string) => {
    try {
      const response: AxiosResponse = await axios.get(url, { headers });
      console.log(response);

      let data;

      // Extract data from the response using the dataExtractor function if provided
      if (dataExtractor) {
        data = dataExtractor(response);
      } else {
        data = response.data;
      }

      // Transform the data using the transformData function if provided
      if (transformData) {
        return transformData(data);
      }

      return data;
    } catch (error) {
      // Call the onError callback function if provided
      if (onError) {
        onError(error);
      }
      throw error;
    }
  };

  const { data, error, isLoading, isValidating, mutate } = useSWR(url, fetcher, swrOptions);

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate
  }
};

