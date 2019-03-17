export interface Options {
  key: string;
  countries?: string[];
}

export interface RequestOptions {
  params: Params;
}

export interface Params {
  Text?: string;
  Countries?: string[];
  IsMiddleware?: boolean;
  Origin?: string;
  Id?: number;
  Key?: string;
}
