import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";


export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
    },
    content: {
    gap:12,
    padding:24,
    paddingBottom:100,
    },
    title:{
        color: colors.gray[600],
        fontSize: 16,
        fontFamily: fontFamily.regular,
        marginBottom: 16,
    },
    indicator:{
        backgroundColor: colors.gray[300],
        width: 80,
        height: 4,  
    }
});