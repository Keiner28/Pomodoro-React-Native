import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { useState } from "react";
import Timer from "./src/components/Timer";
import Tap from "./src/components/Tap";
import { StartStopButton, RestartButton } from "./src/components/Button";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
	const [isWorking, setIsWorking] = useState(false);
	const [time, setTime] = useState(25 * 60);
	const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
	const [isActive, setIsActive] = useState(false);
	const [index, setIndex] = useState(0);

	return (
		<SafeAreaView
			style={[styles.container, { backgroundColor: colors[currentTime] }]}
		>
			<View style={styles.body}>
				<Text style={styles.text}>Pomodoro</Text>
				<Timer time={time} />
				<View style={styles.content}>
					<View style={styles.main}>
						<RestartButton
							index={index}
							setTime={setTime}
							setIsActive={setIsActive}
						/>
						<StartStopButton
							setIsWorking={setIsWorking}
							setIsActive={setIsActive}
							setTime={setTime}
							isActive={isActive}
							isWorking={isWorking}
							time={time}
						/>
					</View>
					<Tap
						setIndex={setIndex}
						currentTime={currentTime}
						setCurrentTime={setCurrentTime}
						setIsActive={setIsActive}
						setTime={setTime}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: Platform.OS === "android" && 40,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 32,
		fontWeight: "bold",
	},
	content: {
		flex: 1,
		justifyContent: "flex-end",
	},
	main: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		gap: 16,
	},
});
