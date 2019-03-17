import axios from 'axios';
import { Options, RequestOptions, Params } from './interfaces';

const loqate = ({ key, countries = [] }: Options) => {
  const config = { key: key };
  const client = axios.create({ baseURL: 'https://api.addressy.com/Capture/Interactive/' });
  return {
    async searchAddresses(query: string) {
      const response = await this.localFetch('Find', {
        params: {
          Text: query,
          Countries: countries,
          IsMiddleware: true,
          Origin: 'US',
        },
      });
      return response.data.Items.filter((item: { Type: string }) => item.Type === 'Address');
    },
    async getAddress(addressId: number) {
      const response = await this.localFetch('Retrieve', {
        params: {
          Id: addressId,
        },
      });
      return response.data.Items[0];
    },
    async localFetch(endPoint: string, requestOptions: RequestOptions) {
      requestOptions.params.Key = config.key;
      return client.get(`${endPoint}/v1.00/json3.ws`, requestOptions);
    },
  };
};

export default loqate;
