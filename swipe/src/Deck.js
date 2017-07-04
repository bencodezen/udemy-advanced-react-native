import React, { Component } from "react";
import { Animated, PanResponder, View } from "react-native";

class Deck extends Component {
	constructor(props) {
		super(props);

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => {
				return true;
			},
			onPanResponderMove: (event, gesture) => {
				console.log(gesture);
			},
			onPanResponderRelease: () => {}
		});

		this.state = { panResponder };
	}

	renderCards() {
		return this.props.data.map(item => {
			return this.props.renderCard(item);
		});
	}

	render() {
		return (
			<View {...this.state.panResponder.panHandlers}>
				{this.renderCards()}
			</View>
		);
	}
}

export default Deck;
