/**
 * Plan and subscription-related type definitions
 */

/**
 * Plan interval types
 */
export enum PlanInterval {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

/**
 * Plan interface
 */
export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: PlanInterval;
  features: string[];
  requestLimit: number;
  rateLimit: {
    requestsPerSecond: number;
    requestsPerDay: number;
  };
  stripePriceId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Subscription status
 */
export enum SubscriptionStatus {
  ACTIVE = 'active',
  PAST_DUE = 'past_due',
  CANCELED = 'canceled',
  UNPAID = 'unpaid',
  TRIALING = 'trialing',
}

/**
 * Subscription interface
 */
export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  stripeSubscriptionId?: string;
  stripeCustomerId?: string;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Usage quota for a subscription
 */
export interface UsageQuota {
  subscriptionId: string;
  requestsUsed: number;
  requestsLimit: number;
  resetDate: Date;
  updatedAt: Date;
}