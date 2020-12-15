/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/screens/Home/Index';
import AppRouter from './src/routers/AppRouter';

AppRegistry.registerComponent(appName, () => AppRouter);
