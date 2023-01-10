import React from 'react';
import { FeatureFlags } from '../types';

export const FeatureFlagsContext = React.createContext<FeatureFlags>([]);

interface FlagsProviderArgs {
  features: FeatureFlags;
  children: React.ReactNode;
}

export const FlagsProvider: React.FC<FlagsProviderArgs> = ({
  features,
  children,
}) => {
  return (
    <FeatureFlagsContext.Provider value={features}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};
