import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const App2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Login}>
        <Text style={styles.titleLogin}>LOGIN</Text>
      </View>
      <View style={styles.Email}>
        <TextInput placeholder='Email' placeholderTextColor='#000000' style={styles.inputEmail} />
      </View>
      <View style={styles.Pwd}>
        <View style={styles.groupPwd}>
          <TextInput placeholder='Password' placeholderTextColor='#000000' style={styles.inputPwd} />
          <Image source={require('./image/eye 1.png')} style={styles.eye} />
        </View>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btns}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPwd}>
        <Text style={{ marginBottom: 10, fontSize: 14 }}>When you agree to terms and conditions</Text>
        <Text style={{ color: '#5D25FA', marginVertical: 10, fontSize: 14 }}>For got your password?</Text>
        <Text style={{ marginVertical: 10, fontSize: 14 }}>Or login with</Text>
      </View>
      <View style={styles.link}>
        <View style={{position:'relative', justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./image/Rectangle 9.png')}/>
          <Image source={require('./image/logo_fsm.png')} style={{position:'absolute', width:11, height:24}} />
        </View>
        <View style={{position:'relative', justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./image/Rectangle 10.png')} />
          <Image source={require('./image/icozalo.png')} style={{position:'absolute', width:22, height:22}} />
        </View>
        <View style={{position:'relative', justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./image/Rectangle 11.png')} />
          <Image source={require('./image/icogoogle.png')} style={{ width: 35, height: 35, position: 'absolute'}} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EFDF',
    fontFamily: 'Roboto'
  },
  Login: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogin: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  Email: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputEmail: {
    width: 330,
    height: 54,
    backgroundColor: '#C4C4C44D',
    paddingLeft: 20,
    bottom: 15,
    fontSize: 18,
  },
  Pwd: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupPwd: {
    position: 'relative',
    flex: 1,
    width: 330,

  },
  inputPwd: {
    width: 330,
    height: 54,
    backgroundColor: '#C4C4C44D',
    paddingLeft: 20,
    fontSize: 18,
    position: 'absolute',
  },
  eye: {
    height: 38,
    width: 40,
    position: 'absolute',
    right: 20,
    top: 8,
  },
  btnArea: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 30,
    bottom: 0
    // alignItems: 'center',
  },
  btns: {
    backgroundColor: '#E53935',
    height: 48,
    width: 330,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPwd: {
    flex: 3,
    alignItems: 'center',
  },
  link: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 15
  }
});
export default App2;