import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App1 = () => {
    return (
        <LinearGradient colors={colorList}
            style={styles.container} start={{ x: 1, y: 0.75 }} end={{ x: 1, y: 1 }}>
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
                <View style={styles.footer}>
                    <Text style={styles.txtFooter}>HOW WE WORK?</Text>
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
        flex: 4,
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextTitle2: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btns: {
        backgroundColor: '#E3C000',
        height: 48,
        width: 119,
        fontWeight: 'bold',
        alignItems: 'center',
        padding: 12
    },
    footer: {
        flex: 2,
        alignItems: 'center',
    },
    txtFooter: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});
const colorList = ['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9'];
export default App1;