export interface IOptions {
  key: string;
  countries?: string[];
}

export interface IRequestOptions {
  params: IParams;
}

export interface IParams {
  Text?: string;
  Countries?: string[];
  IsMiddleware?: boolean;
  Origin?: string;
  Id?: number;
  Key?: string;
}
