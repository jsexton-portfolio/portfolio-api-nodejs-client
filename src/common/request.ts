/**
 * Represents a portfolio request.
 * JWT and Version properties can be used to override initial portfolio client configuration,
 * however currently this functionality does not exist
 */
export interface PortfolioRequest {
  jwt?: string;
  version?: string;
}

export interface RequestWithParameters<T> extends PortfolioRequest {
  queryParameters?: T;
}

export interface RequestWithBody<T> extends PortfolioRequest {
  body?: T;
}

export interface CompletePortfolioRequest<B, Q>
  extends RequestWithBody<B>,
    RequestWithParameters<Q> {}

export interface PaginationQueryParameter {
  page?: number;
  limit?: number;
}
