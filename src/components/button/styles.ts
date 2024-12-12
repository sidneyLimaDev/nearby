import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.green.base,
        padding: 16,
        height: 56,
        maxHeight: 56,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14,
    },
    text: {
        color: colors.gray[100],
        fontSize: 16,
        fontFamily: "Rubik_600SemiBold",
    },
});