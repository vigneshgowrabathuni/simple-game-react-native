import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, Text } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaruButton';
import Title from '../components/Title';
import Colors from '../constants/colors';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputHandler = (enteredValue) => {
    setEnteredNumber(enteredValue);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Please enter a number between 1 and 99.'[
          { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.numberInputTitle}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={'2'}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsWrapper}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonsWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInputTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonsWrapper: {
    flex: 1,
  },
});
