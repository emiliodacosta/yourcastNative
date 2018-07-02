import React from 'react'
import { StyleSheet, Text, View, Image, Container } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
// import ReactPlayer from "react-player";
import axios from 'axios'
// import Time from "react-time";

// class MyAppHeaderText extends Component {
//   render() {
//     return (
//       <MyAppText>
//         <Text style={{fontWeight: bold, color: white}}>{this.props.children}</Text>
//       </MyAppText>
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbuffer} />
        <View style={styles.header}>
          <Image
            source={require('./android-chrome-256x256.png')}
            style={styles.image}
          />
          <Text style={styles.boldtext}>
            <Text style={{ fontSize: 20, lineHeight: 50 }}>Yourcast{'\n'}</Text>
            <Text style={{ fontSize: 16, lineHeight: 30 }}>
              Music for Your Forecast{'\n'}
              {'\n'}
            </Text>
          </Text>
          <Text style={styles.text}>
            This is where temperature, weather conditions, and time will go.{
              '\n'
            }
            {'\n'}
          </Text>
        </View>
        <View style={styles.container} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    justifyContent: 'center',
    flex: 1
  },
  topbuffer: {
    backgroundColor: '#222',
    paddingTop: getStatusBarHeight()
  },
  header: {
    backgroundColor: '#222',
    paddingTop: getStatusBarHeight(),
    height: 'auto',
    alignItems: 'center'
  },
  image: {
    height: 128,
    width: 128
  },
  boldtext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})
