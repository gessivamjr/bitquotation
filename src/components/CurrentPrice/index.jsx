import { View, Text } from "react-native";
import styles from "./style";

export default function CurrentPrice({ currentPrice }) {
    return (
        <View style={styles.currentPrice__container}>
            <Text style={styles.currentPrice__label}>Última cotação <Text style={styles.currentPrice__labelDolar}>(USD)</Text></Text>
            <Text style={styles.currentPrice}>{currentPrice}</Text>
        </View>
    );
}
