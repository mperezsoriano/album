import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainCell: {
    marginTop: 10,
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: '#98A99A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row'
  },
  textCell: {
    textAlign: 'center',
    fontSize: 20,
    flex: 5
  },
  imageCell: {
    width: 85,
    height: 60,
    borderRadius: 20, 
    opacity: 0.6,
    alignItems: 'center',
    flex: 2
  }
})
