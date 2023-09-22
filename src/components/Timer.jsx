import { StyleSheet, Text, View } from "react-native";

/**
 * The Timer component takes in a time value and displays it in a formatted way.
 * @returns The Timer component is being returned. It renders a View component with a Text component
 * inside, displaying the formatted time.
 */
export default function Timer({ time }) {
	const formatTime = `${Math.floor(time / 60)
		.toString()
		.padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
	return (
		<View style={styles.container}>
			<Text style={styles.time}>{formatTime}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F2F2F2",
		marginTop: 16,
		borderRadius: 180,
		height: 300,
		width: 300,
	},
	time: {
		fontSize: 80,
		fontWeight: "bold",
		textAlign: "center",
		color: "#333333",
	},
});
