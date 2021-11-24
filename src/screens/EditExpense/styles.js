import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 60,
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  inputBox: {
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  inputValue: {
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
  },

  inputDescription: {
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
  },

  dateBox:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  dateText: {
    left: 25,
    color: '#fff',
    fontSize: 10,
  },

  inputDate: {
    width: 50,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
  },

  
})

export default styles;