import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    counter: 0
  }

  onPress = () => this.setState({ counter: this.state.counter + 1 })

  render() {
    return (
      <View style={styles.container} accessibilityLabel="main">
        <Text accessibilityLabel="reload">Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Text accessibilityLabel={this.state.counter.toString()}>{this.state.counter}</Text>
        <Button onPress={this.onPress} title="Press me" accessibilityLabel="button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
