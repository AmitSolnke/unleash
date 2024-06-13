/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureSchemaCreatedBy } from './featureSchemaCreatedBy';
import type { FeatureSchemaDependenciesItem } from './featureSchemaDependenciesItem';
import type { FeatureEnvironmentSchema } from './featureEnvironmentSchema';
import type { FeatureSchemaLifecycle } from './featureSchemaLifecycle';
import type { FeatureSchemaStrategiesItem } from './featureSchemaStrategiesItem';
import type { TagSchema } from './tagSchema';
import type { VariantSchema } from './variantSchema';

/**
 * A feature flag definition
 */
export interface FeatureSchema {
    /** `true` if the feature is archived */
    archived?: boolean;
    /**
     * The date the feature was archived
     * @nullable
     */
    archivedAt?: string | null;
    /** The list of child feature names. This is an experimental field and may change. */
    children?: string[];
    /**
     * The date the feature was created
     * @nullable
     */
    createdAt?: string | null;
    /** User who created the feature flag */
    createdBy?: FeatureSchemaCreatedBy;
    /** The list of parent dependencies. This is an experimental field and may change. */
    dependencies?: FeatureSchemaDependenciesItem[];
    /**
     * Detailed description of the feature
     * @nullable
     */
    description?: string | null;
    /** `true` if the feature is enabled, otherwise `false`. */
    enabled?: boolean;
    /** The list of environments where the feature can be used */
    environments?: FeatureEnvironmentSchema[];
    /** `true` if the feature was favorited, otherwise `false`. */
    favorite?: boolean;
    /** `true` if the impression data collection is enabled for the feature, otherwise `false`. */
    impressionData?: boolean;
    /**
     * The date when metrics where last collected for the feature. This field was deprecated in v5, use the one in featureEnvironmentSchema
     * @deprecated
     * @nullable
     */
    lastSeenAt?: string | null;
    /** Current lifecycle stage of the feature */
    lifecycle?: FeatureSchemaLifecycle;
    /** Unique feature name */
    name: string;
    /** Name of the project the feature belongs to */
    project?: string;
    /** `true` if the feature is stale based on the age and feature type, otherwise `false`. */
    stale?: boolean;
    /**
     * This was deprecated in v5 and will be removed in a future major version
     * @deprecated
     */
    strategies?: FeatureSchemaStrategiesItem[];
    /**
     * The list of feature tags
     * @nullable
     */
    tags?: TagSchema[] | null;
    /** Type of the flag e.g. experiment, kill-switch, release, operational, permission */
    type?: string;
    /**
     * The list of feature variants
     * @deprecated
     */
    variants?: VariantSchema[];
}
