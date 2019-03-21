import axios from 'axios';
import { IOptions, IRequestOptions } from './interfaces';

const loqate = ({ key, countries = ['US'] }: IOptions) => {
  const config = { key };
  const client = axios.create({ baseURL: 'https://api.addressy.com/Capture/Interactive/' });
  const localFetch = (endPoint: string, requestOptions: IRequestOptions) => {
    requestOptions.params.Key = config.key;
    return client.get(`${endPoint}/v1.00/json3.ws`, requestOptions);
  };
  return {
    async searchAddresses(query: string) {
      try {
        const response = await localFetch('Find', {
          params: {
            Countries: countries,
            IsMiddleware: true,
            Origin: 'US',
            Text: query,
          },
        });
        return response.data.Items.filter((item: { Type: string }) => item.Type === 'Address');
      } catch (error) {
        return error;
      }
    },
    async getAddress(addressId: number) {
      const response = await localFetch('Retrieve', {
        params: {
          Id: addressId,
        },
      });
      return response.data.Items[0];
    },
  };
};

export default loqate;
