import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function QueryQuotation({ updateDays }) {
    return (
        <>
            <View style={styles.query__container}>
                <TouchableOpacity
                    style={styles.query__button}
                    onPress={() => updateDays(7)}
                >
                    <Text style={styles.query__buttonLabel}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.query__button}
                    onPress={() => updateDays(15)}
                >
                    <Text style={styles.query__buttonLabel}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.query__button}
                    onPress={() => updateDays(30)}
                >
                    <Text style={styles.query__buttonLabel}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.query__button}
                    onPress={() => updateDays(90)}
                >
                    <Text style={styles.query__buttonLabel}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.query__button}
                    onPress={() => updateDays(180)}
                >
                    <Text style={styles.query__buttonLabel}>6M</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
