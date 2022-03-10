import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    query__container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    query__button: {
        alignItems: "center",
        width: 60,
        padding: 5,
        borderRadius: 20,
        backgroundColor: "#14B832",
    },
    query__buttonLabel: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
