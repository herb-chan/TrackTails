import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { useTheme } from "../../app/ThemeContext";

type ButtonTemplateProps = {
    button_text: string;
    button_icon: string;
    button_width: number | string;
    onPress_conditions: boolean;
    onPress_function: () => void;
};

export default function ButtonTemplate({
    button_text,
    button_icon,
    button_width,
    onPress_conditions,
    onPress_function,
}: ButtonTemplateProps) {
    const { theme } = useTheme();
    const colors = Colors[theme];

    const handlePress = () => {
        if (onPress_conditions) {
            onPress_function();
        } else {
            console.warn("Conditions not met for button press");
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                { backgroundColor: colors.accent, width: button_width },
            ]}
            onPress={handlePress}>
            <View style={styles.buttonContent}>
                <FontAwesome
                    name={button_icon}
                    size={20}
                    color={colors.accentText}
                />
                <Text style={[styles.buttonText, { color: colors.accentText }]}>
                    {button_text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 100,
        marginBottom: 20,
        paddingVertical: 15,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "Montserrat",
    },
});
