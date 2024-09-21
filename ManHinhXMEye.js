import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';
// npm install react-native-paper
const App2 = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: 360, height: 640 }}>
                <View style={styles.imageEye}>
                    <Image source={require('./image/eyeball.png')} style={{ width: 140, height: 140 }} />
                </View>
                <View style={styles.Input}>
                    <View style={{ flex: 1, width: 300, position: 'relative' }}>
                        <TextInput placeholder='Please input user name' placeholderTextColor={'#C4C4C4'} style={styles.textInput} />
                        <Image source={require('./image/Group 3.png')} style={{ height: 32, width: 32, left: 10, top: 5, position: 'absolute' }} />
                    </View>
                </View>
                <View style={styles.Input}>
                    <View style={{ flex: 1, width: 300, position: 'relative' }}>
                        <TextInput placeholder='Please input password' placeholderTextColor={'#C4C4C4'} style={styles.textInput} />
                        <Image source={require('./image/Group 5.png')} style={{ height: 32, width: 32, left: 10, top: 5, position: 'absolute' }} />
                    </View>
                </View>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 18 }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.link}>
                    <Text style={{ fontWeight: 400, fontSize: 18 }}>Register</Text>
                    <Text style={{ fontWeight: 400, fontSize: 18 }}>Forgot Password</Text>
                </View>
                <View style={styles.titleMethods}>
                    <Text style={styles.line}></Text>
                    <Text style={{ fontWeight: 400, fontSize: 18 }}>Other Login Methods</Text>
                    <Text style={styles.line}></Text>
                </View>
                <View style={styles.methods}>
                    <Image source={require('./image/addUser.png')} style={styles.itemMethods} />
                    <Image source={require('./image/wifi.png')} style={styles.itemMethods} />
                    <View style={{position:'relative', justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('./image/fb.png')} style={styles.itemMethods} />
                        <Image source={require('./image/logo_f.png')} style={{position:'absolute', width:28, height:41}} />
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    },
    imageEye: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        paddingLeft: 55,
        fontSize: 18,
        fontWeight: 400,
    },
    btnArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10
    },
    btns: {
        width: 300,
        height: 50,
        backgroundColor: '#386FFC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    link: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleMethods: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        marginHorizontal: 3,
        width: 60,
        // height:1,
        borderBottomWidth: 1,
        borderColor: '#0E18F5',
    },
    methods: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    itemMethods: {
        width: 74,
        height: 74,
    }
});
export default App2;