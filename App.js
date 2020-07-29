import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import WebView from 'react-native-webview'
import NavigationBar from 'react-native-navbar';


const App = () => {

  const styles = {
    flexContainer: {
      flex: 1,
    },
  };

  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };

  const titleConfig = {
    title: 'Hello, world',
  };


  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        />
        <WebView source={{ uri: 'https://www.chedraui.com.mx/' }} />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  }
})

export default App