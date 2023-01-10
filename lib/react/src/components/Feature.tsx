import React from 'react';
import { useFeature } from '../hooks';

interface FeatureProps {
  flag: string;
  children?: React.ReactNode;
  renderOn?: React.ReactNode;
  renderOff?: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({
  flag,
  children,
  renderOn = children,
  renderOff,
}) => {
  const hasFeature = useFeature(flag);

  if (!hasFeature) {
    if (!renderOff) return null;
    return <React.Fragment>{renderOff}</React.Fragment>;
  }

  return <React.Fragment>{renderOn}</React.Fragment>;
};

export default Feature;
