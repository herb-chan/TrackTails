import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { Colors } from "../constants/Colors";
import { useTheme } from "./ThemeContext";

import ButtonTemplate from "@/components/templates/button_template";

type IndexScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Index"
>;

type Props = {
    navigation: IndexScreenNavigationProp;
};

function smh() {
    console.log(".");
}

export default function Index({ navigation }: Props) {
    const { theme, toggleTheme } = useTheme();
    const colors = Colors[theme];

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}>
            <ButtonTemplate
                button_text="Profile"
                button_icon="user"
                button_width={200}
                onPress_conditions={false}
                onPress_function={smh}
            />
            <ButtonTemplate
                button_text="Library"
                button_icon="book"
                button_width="80%"
                onPress_conditions={true}
                onPress_function={smh}
            />
            {/* <Text style={[styles.title, { color: colors.text }]}>
                Track Tails
            </Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        { backgroundColor: colors.accent },
                    ]}
                    onPress={() => navigation.navigate("LoginScreen")}>
                    <FontAwesome
                        name="user-plus"
                        size={20}
                        color={colors.accentText}
                    />
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
                    <FontAwesome
                        name="user-plus"
                        size={20}
                        color={colors.accentText}
                    />
                    <Text
                        style={[
                            styles.buttonText,
                            { color: colors.accentText },
                        ]}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View> */}
            {/* <TouchableOpacity style={styles.toggle_theme} onPress={toggleTheme}>
                <Text style={{ color: colors.accent }}>Toggle Theme</Text>
            </TouchableOpacity> */}
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
        fontFamily: "Montserrat",
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
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Montserrat",
    },
    toggle_theme: {
        top: 100,
        position: "absolute",
    },
});
