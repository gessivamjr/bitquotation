import { View, Text, Image, FlatList } from "react-native";
import styles from "./style";

const ListHeader = () => {
    return (
        <View style={styles.quotation__columnHeader}>
            <Text style={styles.quotation__subtitle}>Moeda</Text>
            <Text style={styles.quotation__subtitle}>Data</Text>
            <Text style={styles.quotation__subtitle}>
                Preço <Text style={styles.quotation__currency}>(USD)</Text>
            </Text>
        </View>
    );
};

export const ListItem = ({ date, price }) => {
    return (
        <View style={styles.quotation__columnItems}>
            <View style={styles.quotation__items}>
                <Image
                    style={styles.quotation__logo}
                    source={require("../../../assets/bitcoin.png")}
                />
                <Text style={styles.quotation__date}>{date}</Text>
                <Text style={styles.quotation__price}>{price}</Text>
            </View>
        </View>
    );
};

export default function QuotationItems({ quotationList }) {
    return (
        <>
            <View style={styles.quotation__containerTitle}>
                <Text style={styles.quotation__title}>Cotações:</Text>
            </View>
            <ListHeader />
            <FlatList
                data={quotationList}
                renderItem={({ item }) => (
                    <ListItem date={item.date} price={item.price} />
                )}
                keyExtractor={(item) => item.date}
            />
        </>
    );
}
