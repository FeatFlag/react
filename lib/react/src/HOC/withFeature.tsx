import React from 'react';
import { Feature } from '../components';

const withFeature =
  (featureName: string) =>
  (Component: Function) =>
  (props: React.ComponentProps<any>) =>
    (
      <Feature flag={featureName}>
        <Component {...props} />
      </Feature>
    );

export default withFeature;
