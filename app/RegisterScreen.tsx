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

type RegisterScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "RegisterScreen"
>;

type Props = {
    navigation: RegisterScreenNavigationProp;
};

export default function RegisterScreen({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { theme } = useTheme();
    const colors = Colors[theme];

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasMinLength = password.length >= 8;
        return { hasUpperCase, hasLowerCase, hasNumber, hasMinLength };
    };

    const emailValid = validateEmail(email);
    const passwordCriteria = validatePassword(password);
    const passwordValid =
        passwordCriteria.hasUpperCase &&
        passwordCriteria.hasLowerCase &&
        passwordCriteria.hasNumber &&
        passwordCriteria.hasMinLength;

    const passwordsMatch = password === confirmPassword;

    return (
        <View
            style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>Register</Text>
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
                {!emailValid && email !== "" && (
                    <Text style={[styles.errorText, { color: "red" }]}>
                        Please enter a valid email address.
                    </Text>
                )}
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
                <View style={styles.criteriaWrapper}>
                    <Text
                        style={[
                            styles.criteriaText,
                            {
                                color: passwordCriteria.hasUpperCase
                                    ? "green"
                                    : "red",
                            },
                        ]}>
                        {passwordCriteria.hasUpperCase ? "✓" : "✗"} At least one
                        uppercase letter
                    </Text>
                    <Text
                        style={[
                            styles.criteriaText,
                            {
                                color: passwordCriteria.hasLowerCase
                                    ? "green"
                                    : "red",
                            },
                        ]}>
                        {passwordCriteria.hasLowerCase ? "✓" : "✗"} At least one
                        lowercase letter
                    </Text>
                    <Text
                        style={[
                            styles.criteriaText,
                            {
                                color: passwordCriteria.hasNumber
                                    ? "green"
                                    : "red",
                            },
                        ]}>
                        {passwordCriteria.hasNumber ? "✓" : "✗"} At least one
                        number
                    </Text>
                    <Text
                        style={[
                            styles.criteriaText,
                            {
                                color: passwordCriteria.hasMinLength
                                    ? "green"
                                    : "red",
                            },
                        ]}>
                        {passwordCriteria.hasMinLength ? "✓" : "✗"} At least 8
                        characters
                    </Text>
                </View>
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.icon}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style={[
                        styles.input,
                        { borderColor: colors.text, color: colors.text },
                    ]}
                />
                {!passwordsMatch && confirmPassword !== "" && (
                    <Text style={[styles.errorText, { color: "red" }]}>
                        Passwords do not match.
                    </Text>
                )}
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={[
                        styles.buttonContainer,
                        { backgroundColor: colors.accent },
                    ]}
                    onPress={() => {
                        if (emailValid && passwordValid && passwordsMatch) {
                            console.log(email, password);
                        } else {
                            console.log("Invalid input");
                        }
                    }}>
                    <Text
                        style={[
                            styles.buttonText,
                            { color: colors.accentText },
                        ]}>
                        Register
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
    inputWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
    },
    input: {
        height: 40,
        borderWidth: 1,
        width: "100%",
        marginBottom: 10,
        paddingHorizontal: 10,
        fontFamily: "Montserrat",
    },
    criteriaWrapper: {
        alignItems: "flex-start",
        width: "80%",
    },
    criteriaText: {
        fontSize: 14,
        marginBottom: 5,
        fontFamily: "Montserrat",
    },
    errorText: {
        fontSize: 14,
        marginBottom: 10,
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
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Montserrat",
    },
});
