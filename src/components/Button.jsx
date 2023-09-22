import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { useEffect } from "react";

/**
 * The function `playSound` asynchronously plays a sound file called "click.mp3".
 */
const playSound = async () => {
	const { sound } = await Audio.Sound.createAsync(
		require("../../assets/click.mp3")
	);
	await sound.playAsync();
};

/**
 * The StartStopButton component is a button that starts or stops a timer and updates the time state
 * accordingly.
 * @returns The StartStopButton component is being returned.
 */
export function StartStopButton({
	isActive,
	isWorking,
	time,
	setIsActive,
	setTime,
	setIsWorking,
}) {
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);
		} else if (!isActive && time !== 0) {
			clearInterval(interval);
		}

		if (time === 0) {
			setIsActive(false);
			setIsWorking((prev) => !prev);
			setTime(isWorking ? 300 : 1500);
		}

		return () => clearInterval(interval);
	}, [isActive, time]);

	const handlePress = () => {
		playSound();
		setIsActive(!isActive);
	};

	return (
		<TouchableOpacity onPress={handlePress} style={styles.button}>
			<Text style={styles.text}>{isActive ? "STOP" : "START"}</Text>
		</TouchableOpacity>
	);
}

/**
 * The RestartButton component is a button that restarts a timer and plays a sound when pressed.
 * @returns The RestartButton component is returning a TouchableOpacity component with a Text component
 * inside.
 */
export function RestartButton({ index, setTime, setIsActive }) {
	const handleRestart = () => {
		const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
		setTime(newTime * 60);
		setIsActive(false);
		playSound();
	};
	return (
		<TouchableOpacity onPress={handleRestart} style={styles.button}>
			<Text style={styles.text}>RESTART</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "white",
		fontWeight: "bold",
	},

	button: {
		alignItems: "center",
		backgroundColor: "#333333",
		padding: 16,
		borderRadius: 16,
		color: "white",
		fontWeight: "bold",
		flex: 1,
	},
});
