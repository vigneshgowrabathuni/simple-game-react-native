import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaruButton';
import Title from '../components/Title';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.jpg')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <View>
        <PrimaryButton onPress={onStartNewGame}>Start New game</PrimaryButton>
      </View>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 24,
    color: Colors.white,
  },
  highlight: {
    color: Colors.accent500,
  },
});
