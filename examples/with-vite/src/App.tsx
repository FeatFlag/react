import './App.css';
import {
  Feature,
  FlagsProvider,
  useFeature,
  withFeature,
} from '@featflag/react';
import flags from './flags.json';

function App() {
  return (
    <FlagsProvider features={flags}>
      <div className="App">
        <Feature flag="feat">this should be in DOM</Feature>
        <Feature flag="featDisabled">this should be hidden</Feature>
        <WithUseFeatureHook />
        <TestWithFeatureHOC />
      </div>
    </FlagsProvider>
  );
}

function WithUseFeatureHook() {
  const isNewUiActive = useFeature('hookSupport');
  return (
    <p style={{ color: isNewUiActive ? 'green' : 'red' }}>Test with hooks</p>
  );
}

function WithFeatureHOC() {
  return <p style={{ color: 'green' }}>Test with withFeature (HOC)</p>;
}

const TestWithFeatureHOC = withFeature('hocSupport')(WithFeatureHOC);

export default App;
