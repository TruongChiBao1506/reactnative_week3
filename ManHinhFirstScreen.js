// import React from 'React';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.Cirkle}>
          <Image source={require('./image/Ellipse8.png')} style={{ height: 140, width: 140, border: 15 }} />
        </View>
        <View style={styles.Title1}>
          <Text style={styles.TextTitle1}>GROW</Text>
          <Text style={styles.TextTitle1}> YOUR BUSINESS</Text>
        </View>
        <View style={styles.Title2}>
          <Text style={styles.TextTitle2}>We will help you to grow your business using</Text>
          <Text style={styles.TextTitle2}>online server</Text>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btns}>
            <Text style={{ fontWeight: 'bold' }}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btns}>
            <Text style={{ fontWeight: 'bold' }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Cirkle: {
    flex: 4,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title1: {
    flex: 2,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitle1: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  Title2: {
    flex: 2,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextTitle2: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  btnArea: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btns: {
    backgroundColor: '#E3C000',
    height: 48,
    width: 119,
    borderRadius: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 12
  }
});
export default App;
