export interface PortfolioResponse<T = any> {
  success: boolean;
  meta: Meta;
  data?: T;
}

export interface Meta {
  message: string;
  errorDetails: ErrorDetail[];
  paginationDetails: PaginationDetails;
  schemas: { [schemaName: string]: any };
}

export interface ErrorDetail {
  description: string;
  fieldName: string;
}

export interface PaginationDetails {
  page: number;
  limit: number;
}
