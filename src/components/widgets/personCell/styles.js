import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  titleView: {
    flex: 1
  },
  personalView: {
    backgroundColor: '#98A99A',
    flex: 4,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 5
  },
  imageView: {
    flex: 2
  },
  textView: {
    flex: 3,
    margin: 10
  },
  h1Text: {
    marginTop: 10,
    fontSize: 24,
  },
  h2Text: {
    fontSize: 18,
    alignItems: 'baseline',
    marginVertical: 6
  },
  h3Text: {
    fontSize: 14,
    alignSelf:'center',
    marginVertical: 6,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  personalImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  creditCardView: {
    flex: 4
  },
  credirCardImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '45%'
  }
})