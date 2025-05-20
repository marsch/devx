/**
 * User-related type definitions
 */

/**
 * User roles in the system
 */
export enum UserRole {
  ADMIN = 'admin',
  DEVELOPER = 'developer',
}

/**
 * Base user interface
 */
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User with Okta-specific properties
 */
export interface OktaUser extends User {
  oktaId: string;
  oktaProfile?: Record<string, unknown>;
}

/**
 * User session information
 */
export interface UserSession {
  userId: string;
  email: string;
  role: UserRole;
  isAuthenticated: boolean;
  expiresAt: number;
}