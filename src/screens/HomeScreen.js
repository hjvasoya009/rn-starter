import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	// console.log(props.navigation);

	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>

			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Components')}
				title="Go to Components Demo" 
			/>

			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('List')}
				title="Go to List Demo" 
			/>

			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Image')}
				title="Go to Image Demo" 
			/>
			
			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Counter')}
				title="Go to Counter Demo" 
			/>

			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Color')}
				title="Go to Color Demo" 
			/>
			
			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Square')}
				title="Go to Square Demo" 
			/>

			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Text')}
				title="Go to Text Demo" 
			/>

			<Button
				style={styles.buttonStyle}
				onPress={() => navigation.navigate('Box')}
				title="Go to Box Demo" 
			/>

			{/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity> */}
		</View>

	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	},
	buttonStyle: {
		margin: 10
	}
});

export default HomeScreen;
