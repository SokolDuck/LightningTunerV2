import { Navigation } from "react-native-navigation";
import { createStore } from 'redux';
import { STACK_ID  } from './src/navigation/constants';
import { screens, screensNames } from "./src/navigation/screens";
import registerScreens from "./src/navigation/registerScreens";
import rootReducer from './src/reducers'

const reduxStore = createStore(rootReducer);

registerScreens(reduxStore);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            title: {
                fontSize: 20,
                color: '#FFFFFF',
            },
            background: {
                color: '#3F51B5'
            },
            backButton: {
                color: 'white'
            },
            drawBehind: false,
            visible: true,
        }
    });

    Navigation.setRoot({
        root: {
            stack: {
                id: STACK_ID,
                children: [
                    {
                        component: {
                            name: screens[screensNames.TuningScreen].id
                        }

                    }
                ],
            }
        }
    });
});