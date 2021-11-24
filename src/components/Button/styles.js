import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008800',
    borderRadius: 5,
  },
  buttonDisabled: {
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003300',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  }
})

export default styles;