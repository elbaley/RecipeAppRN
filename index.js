/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/Router';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
