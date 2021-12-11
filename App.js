import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail, OnBoarding } from "screens";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
        "Roboto-Light": require('./assets/fonts/Roboto-Light.ttf'),
        "Roboto-Thin": require('./assets/fonts/Roboto-Thin.ttf'),
        "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
        "Roboto-Italic": require('./assets/fonts/Roboto-Italic.ttf'),
        "Geraldine": require('./assets/fonts/Geraldine.ttf'),
        "American": require('./assets/fonts/AmericanCaptain.otf'),
        "Typo-Graphica": require('./assets/fonts/Typographica.ttf'),
        "Goldleaf": require('./assets/fonts/goldleaf.ttf'),
        "Landasans-Medium": require('./assets/fonts/LandasansMedium.otf'),
        "Landasans-Ultra": require('./assets/fonts/LandasansUltraLight.otf'),
    })

    if (!loaded) {
        return null;
    }

 
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >
                {/* Tabs */}

                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;