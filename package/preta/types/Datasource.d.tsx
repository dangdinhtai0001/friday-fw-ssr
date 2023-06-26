import { SWRResponse, SWRConfiguration } from 'swr';
import { AxiosRequestConfig } from 'axios';

export interface IDatasourceProps {
  url: string;
  fetcherOptions?: IFetcherOptions;
  swrOptions?: SWRConfiguration;
  transformData?: (data: any) => any;
  transformError?: (error: any) => any;
};


export interface IDatasourceReturn extends SWRResponse {
};

export interface IFetcherOptions extends AxiosRequestConfig{
}