import { SWRResponse, SWRConfiguration } from 'swr';

export interface IDatasourceProps {
  url: string;
  fetcherOptions?: IFetcherOptions;
  swrOptions?: SWRConfiguration;
  dataExtractor?: (response: any) => any;
  transformData?: (data: any) => any;
  transformError?: (error: any) => any;
  onData?: (data: any) => void;
  onError?: (error: any) => void;
};


export interface IDatasourceReturn extends SWRResponse {
  // data: any;
  // isLoading: boolean;
  // error: any;
};

export interface IFetcherOptions {
  headers?: Record<string, string>;
}