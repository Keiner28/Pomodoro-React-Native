import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short break", "Long break"];

/**
 * The Tap component is a React component that renders a row of options and handles the press event for
 * each option.
 * @returns a View component that contains multiple TouchableOpacity components. Each TouchableOpacity
 * component represents an option and has an onPress event handler that calls the handlePress function.
 * The handlePress function updates the currentTime, setTime, isActive, and index states based on the
 * selected option. The selected option is determined by the currentTime state. The options are
 * rendered as Text components within the TouchableOpacity components.
 */
export default function Tap({
	currentTime,
	setCurrentTime,
	setTime,
	setIsActive,
	setIndex,
}) {
	function handlePress(index) {
		const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
		setCurrentTime(index);
		setTime(newTime * 60);
		setIsActive(false);
		setIndex(index);
	}
	return (
		<View style={{ flexDirection: "row" }}>
			{options.map((item, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => handlePress(index)}
					style={[
						styles.itemStyle,
						currentTime === index && styles.itemActive,
					]}
				>
					<Text
						style={[
							styles.textStyle,
							currentTime === index && styles.textActive,
						]}
					>
						{item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	itemStyle: {
		width: "33%",
		alignItems: "center",
		marginTop: 30,
		paddingVertical: 8,
		marginBottom: 10,
	},
	textStyle: {
		fontWeight: "bold",
		fontSize: 16,
	},
	textActive: {
		color: "#333333",
	},
	itemActive: {
		borderColor: "white",
		borderWidth: 3,
		borderRadius: 16,
	},
});
