import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
  mainView: {
    backgroundColor: '#E3E3E3',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  imageLogo: {
    marginTop: 5,
    width: 170,
    height: 170,
  },
  askText: {
    fontSize: 28,
    marginBottom: 20
  },
  textInput: {
    backgroundColor: '#98A99A',
    fontSize: 28,
    width: '100%',
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 120
  },
  textInputOk: {
    backgroundColor: '#98A99A',
    width: '100%', 
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  textInputOkText: {
    fontSize: 28,
    borderRadius: 10,
    paddingVertical: 5,
  }
})