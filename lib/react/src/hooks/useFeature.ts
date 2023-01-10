import React from 'react';
import { FeatureFlags, FeatureFlagsGroup } from '../types';
import { FeatureFlagsContext } from '../providers';

const useFeatures = () => React.useContext(FeatureFlagsContext);

export const useFeature = (name: string): boolean => {
  const features = useFeatures();

  if (!features) return false;

  const isFeatureActive = (feature: FeatureFlagsGroup): boolean => {
    return feature.isActive && feature.name === name;
  };

  const isActive = (
    featureFlags: FeatureFlags | FeatureFlagsGroup
  ): boolean => {
    if (Array.isArray(featureFlags)) {
      return featureFlags.some((ff) => isActive(ff));
    } else {
      if (!featureFlags.isActive) return false;
      if (featureFlags.subFeatureFlags)
        return isActive(featureFlags.subFeatureFlags);
    }

    return isFeatureActive(featureFlags);
  };

  return isActive(features);
};
