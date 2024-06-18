import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Index from "./Index";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Delicious-Handrawn": require("../assets/fonts/DeliciousHandrawn-Regular.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    } else {
        console.log("Fonts are loaded.");
    }

    return (
        <Stack.Navigator
            initialRouteName="Index"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}
