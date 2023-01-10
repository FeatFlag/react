type FeatureFlag = {
  name: string;
  description?: string;
  isActive: boolean;
};

export type FeatureFlagsGroup = FeatureFlag & {
  subFeatureFlags?: FeatureFlags;
};

export type FeatureFlags = FeatureFlagsGroup[];
