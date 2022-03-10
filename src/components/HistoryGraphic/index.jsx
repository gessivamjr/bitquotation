import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function HistoryGraphic({ graphic }) {
    return (
        <View>
            <LineChart
                data={{
                    datasets: [
                        {
                            data: graphic,
                        },
                    ],
                }}
                width={(Dimensions.get("window").width) - 40}
                height={250}
                yAxisLabel="$"
                yAxisSuffix="k"
                withVerticalLines={false}
                yLabelsOffset={5}
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#232323",
                    backgroundGradientTo: "#3F3F3F",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "1",
                        strokeWidth: "2",
                        stroke: "#FEAF00",
                    },
                }}
                bezier
                style={{
                    marginBottom: 15,
                    paddingTop: 35,
                    borderRadius: 20,
                }}
            />
        </View>
    );
}
