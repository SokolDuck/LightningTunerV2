import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from "react-native-navigation";
import Tuner from '../../containers/Tuner/index'
import { screens, screensNames } from "../../../src/navigation/screens";
import { getTopBarButtons, buttonsNames } from "../../navigation/topBarButtons";
import { pushScreen } from "../../navigation/NavigationWrappers";
import styles from './styles';

export class TuningScreen extends Component {
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: screens[screensNames.TuningScreen].title,
                },
                rightButtons: [
                    {
                        id: buttonsNames.SettingsButton,
                        icon: getTopBarButtons()[buttonsNames.SettingsButton].icon
                    }
                ]
            }
        };
    }

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        if(buttonId === getTopBarButtons()[buttonsNames.SettingsButton].id) {
            pushScreen(screens[screensNames.SettingsScreen]);
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Tuner />
            </View>
        );
    }
}