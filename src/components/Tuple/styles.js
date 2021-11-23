import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: "#fff"
  },
  value: {
    height: '100%',
    flex: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: '100%',
    flex: 1,
    borderLeftWidth: .3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    height: '100%',
    borderLeftWidth: .3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 15,
    paddingHorizontal: 10,
  },
  text2: {
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 10,
  },
  buttonBox: {
    height: '100%',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginRight: 14,
    paddingHorizontal: 18,
    paddingBottom: 4,
    backgroundColor: '#990000',
    borderRadius: 5,
    color: '#fff',
    fontSize: 30
  },
})

export default styles;