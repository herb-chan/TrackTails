import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { ThemeProvider } from "./ThemeContext";
import * as SplashScreen from "expo-splash-screen";

import Index from "./Index";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Gloria-Hallelujah": require("../assets/fonts/GloriaHallelujah-Regular.ttf"),
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
        <ThemeProvider>
            <Stack.Navigator
                initialRouteName="Index"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        </ThemeProvider>
    );
}
