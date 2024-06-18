import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        /* Handle register logic */
                    }}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: "Delicious-Handrawn",
    },
    inputWrapper: {
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        marginBottom: 20,
        paddingHorizontal: 10,
        fontFamily: "Delicious-Handrawn",
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
        backgroundColor: "black",
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontFamily: "Delicious-Handrawn",
    },
});
