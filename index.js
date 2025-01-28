/**
 * @format
 */

import {AppRegistry, BackHandler} from 'react-native';
import App from '././src/App';
import {name as appName} from './app.json';

// Monkey patch for BackHandler.removeEventListener
if (!BackHandler.removeEventListener) {
    BackHandler.removeEventListener = () => {
      console.warn('BackHandler.removeEventListener is deprecated and has been monkey patched.');
    };
  }
AppRegistry.registerComponent(appName, () => App);
