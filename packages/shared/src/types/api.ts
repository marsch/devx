/**
 * API-related type definitions
 */

/**
 * API specification types
 */
export enum ApiSpecType {
  OPENAPI = 'openapi',
  GRAPHQL = 'graphql',
}

/**
 * API visibility
 */
export enum ApiVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
  INVITE_ONLY = 'invite_only',
}

/**
 * Base API interface
 */
export interface Api {
  id: string;
  name: string;
  description: string;
  version: string;
  specType: ApiSpecType;
  visibility: ApiVisibility;
  specUrl?: string;
  specContent?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * API key interface
 */
export interface ApiKey {
  id: string;
  userId: string;
  apiId: string;
  name: string;
  key: string; // Only returned when first created, never stored in plain text
  isActive: boolean;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * API usage statistics
 */
export interface ApiUsage {
  apiId: string;
  userId: string;
  requestCount: number;
  errorCount: number;
  period: 'day' | 'week' | 'month';
  timestamp: Date;
}