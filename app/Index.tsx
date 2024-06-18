import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types"; // Ensure this file is created and accurate

type IndexScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Index"
>;

type Props = {
    navigation: IndexScreenNavigationProp;
};

export default function Index({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Track Tails</Text>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.buttonText}>Register</Text>
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
