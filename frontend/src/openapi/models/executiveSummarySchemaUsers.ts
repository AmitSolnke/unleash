/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * High level user count statistics
 */
export type ExecutiveSummarySchemaUsers = {
    /** The number of active Unleash users who have user Unleash in the past 60 days */
    active: number;
    /** The number of inactive Unleash users who have not used Unleash in the past 60 days. */
    inactive: number;
    /** The number of actual Unleash users */
    total: number;
};
