import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps158422Navigator from '../features/Maps158422/navigator';
import Add-Item158421Navigator from '../features/Add-Item158421/navigator';
import Maps158417Navigator from '../features/Maps158417/navigator';
import UserProfile158413Navigator from '../features/UserProfile158413/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps158422: { screen: Maps158422Navigator },
Add-Item158421: { screen: Add-Item158421Navigator },
Maps158417: { screen: Maps158417Navigator },
UserProfile158413: { screen: UserProfile158413Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
