import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { Colors } from "../constants/Colors";
import { useTheme } from "./ThemeContext";

type IndexScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Index"
>;

type Props = {
    navigation: IndexScreenNavigationProp;
};

export default function Index({ navigation }: Props) {
    const { theme, toggleTheme } = useTheme();
    const colors = Colors[theme];

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>
                Track Tails
            </Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        { backgroundColor: colors.accent },
                    ]}
                    onPress={() => navigation.navigate("LoginScreen")}>
                    <Text
                        style={[
                            styles.buttonText,
                            { color: colors.accentText },
                        ]}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        { backgroundColor: colors.accent },
                    ]}
                    onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text
                        style={[
                            styles.buttonText,
                            { color: colors.accentText },
                        ]}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.footerText, { color: colors.text }]}>
                Don't have an account?{" "}
                <Text
                    style={{
                        color: colors.accent,
                        textDecorationLine: "underline",
                    }}>
                    Register now
                </Text>{" "}
                to start tracking your habits!
            </Text>
            <TouchableOpacity style={styles.toggle_theme} onPress={toggleTheme}>
                <Text style={{ color: colors.accent }}>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: "Gloria-Hallelujah",
    },
    buttonWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
    },
    buttonContainer: {
        marginBottom: 20,
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Gloria-Hallelujah",
    },
    footerText: {
        fontSize: 10,
        marginBottom: 20,
        fontFamily: "Gloria-Hallelujah",
    },
    toggle_theme: {
        top: 100,
        position: "absolute",
    },
});
