import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { Colors } from "../constants/Colors";
import { useTheme } from "./ThemeContext";

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "LoginScreen"
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { theme } = useTheme();
    const colors = Colors[theme];

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>Login</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={colors.icon}
                    value={email}
                    onChangeText={setEmail}
                    style={[
                        styles.input,
                        { borderColor: colors.text, color: colors.text },
                    ]}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={colors.icon}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={[
                        styles.input,
                        { borderColor: colors.text, color: colors.text },
                    ]}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        { backgroundColor: colors.accent },
                    ]}
                    onPress={() => {
                        /* Handle login logic */
                    }}>
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
                    onPress={() => navigation.goBack()}>
                    <Text
                        style={[
                            styles.buttonText,
                            { color: colors.accentText },
                        ]}>
                        Back
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
    inputWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
    },
    input: {
        height: 40,
        borderWidth: 1,
        width: "100%",
        marginBottom: 20,
        paddingHorizontal: 10,
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
});
