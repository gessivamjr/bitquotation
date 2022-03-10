import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    quotation__containerTitle: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginVertical: 20,
    },
    quotation__title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff",
    },
    quotation__columnHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    quotation__subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    quotation__currency: {
        fontSize: 12,
    },
    quotation__columnItems: {
        width: "90%",
    },
    quotation__items: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
    },
    quotation__logo: {
        width: 40,
        height: 40,
        marginLeft: 25,
    },
    quotation__date: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        paddingLeft: 60,
    },
    quotation__price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        paddingLeft: 25,
    },
});

export default styles;
