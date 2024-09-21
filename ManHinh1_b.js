import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App2 = () => {
    return (
        <LinearGradient colors={colorList}
            style={styles.container} start={{ x: 1, y: 0.75 }} end={{ x: 1, y: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.Cirkle}>
                    <Image source={require('./image/Vector_White.png')} style={{ height: 130, width: 112.37, opacity: 0.98, position: 'absolute' }} />
                    <Image source={require('./image/Vector_Black.png')} style={{ height: 125, width: 112.37, opacity: 0.98, position: 'absolute' }} />
                </View>
                <View style={styles.Title1}>
                    <Text style={styles.TextTitle1}>FORGET</Text>
                    <Text style={styles.TextTitle1}> PASSWORD</Text>
                </View>
                <View style={styles.Title2}>
                    <Text style={styles.TextTitle2}>Provide your account’s email for which you</Text>
                    <Text style={styles.TextTitle2}>want to reset your password</Text>
                </View>
                {/* <View style={styles.emailContainer}> */}
                <View style={styles.emailView}>
                    <Image source={require('./image/mail.png')} style={{ height: 54, width: 45, left: 0, position: 'absolute' }} />
                    <TextInput placeholder="Email" style={styles.email} />
                </View>
                {/* </View> */}
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Cirkle: {
        flex: 3,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextTitle1: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    Title2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextTitle2: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    emailContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailView: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    email: {
        position: 'absolute',
        width: 255,
        height: 54,
        border: 2,
        backgroundColor: '#C4C4C4',
        padding: 12,
        left: 45,
    },
    btnArea: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 30
        // alignItems: 'center',
    },
    btns: {
        backgroundColor: '#E3C000',
        height: 48,
        width: 300,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
const colorList = ['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9'];
export default App2;