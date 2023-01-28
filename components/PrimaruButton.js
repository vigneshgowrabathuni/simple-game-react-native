import { Pressable, Text, View, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
  const handlePress = () => {
    console.log('Pressed!');
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#4e0329',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
