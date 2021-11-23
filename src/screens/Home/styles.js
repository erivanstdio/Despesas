import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  screenTitle: {
    marginTop: 50,
    marginLeft: 30,
    color: '#fff',
    fontSize: 30,
    alignSelf: 'flex-start'
  },

  table: {
    marginTop: 50,
  },

  title: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center'
  },
  input: {
    color: '#fff',
    fontSize: 20,
    borderWidth: 0.7,
    borderColor: "#fff",
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 10
  },
  boxDespesas: {
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
})

export default styles;