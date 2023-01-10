# @featflag/react

Manage react features flags easily and effectively

## What's in

- Zero dependencies
- Full TypeScript support
- Render Props API, hooks API, high order component API...
- Named and nested flags support

## Installation

```bash
pnpm add @featflag/react
# or
yarn add @featflag/react
# or
npm install @featflag/react
```

## Usage
Create your feature flags array like :

```json
[
  {
    "name": "newUI",
    "isActive": true,
    "subFeatureFlags": [
      {
        "name": "darkMode",
        "isActive": false
      },
      {
        "name": "awesomeHeader",
        "isActive": true
      }
    ]
  },
  {
    "name": "mapSupport",
    "isActive": true
  }
]
```

To use FeatFlag in your application, wrap your component tree with the FlagsProvider component and pass in your feature flags object as props.

```javascript
<FlagsProvider features={flags}>
  {/* your component tree goes here */}
</FlagsProvider>
```

You can then use the amazing utilities to check your features and make decisions:
### Using hooks
Use the `useFeature` hook to check if a single feature is enabled in your components

```javascript
const isDarkModeActive: boolean = useFeature('darkMode');
```

### Using components
Use the `Feature` component, and pass your flag's name to it as a props to render the children if the feature is enabled :

```javascript
<Feature flag="mapSupport">
  <p>Enjoy your amazing map</p>
</Feature>
```

Or use the `Feature` component, with props `renderOn` and `renderOff`, so you can handle the case if the feature is enabled easily, like:

```javascript
<Feature
  flag="awesomeHeader"
  renderOn={<p>Do you like our stunning header</p>}
  renderOff={<p>Stay tuned comming soon...</p>}
/>
```

Another way to do the same :

```javascript
<Feature flag="awesomeHeader" renderOff={<p>Stay tuned comming soon...</p>}>
  <p>Do you like our stunning header</p>
</Feature>
```

### Using HOC API
Also, you can wrap a component behind a feature flag, so the component is only render when the feature is enabled

```javascript
export default withFeature('mapSupport')(Map);
```

## License
`@featflag/react` is MIT licensed. See [LICENSE](./LICENSE) for more details.
