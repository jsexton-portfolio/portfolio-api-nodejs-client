export interface PortfolioResponse<T = any> {
  success: boolean;
  meta: Meta;
  data?: T;
}

export interface Meta {
  message: string;
  errorDetails: ErrorDetail[];
  schemas: { [schemaName: string]: any };
}

export interface ErrorDetail {
  description: string;
  fieldName: string;
}
