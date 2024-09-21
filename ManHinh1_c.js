import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useRef } from 'react';
// add yarn add react-native-confirmation-code-field

const App3 = ({ length = 6 }) => {
    const [code, setCode] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        if (text && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <LinearGradient colors={colorList}
            style={styles.container} start={{ x: 1, y: 0.75 }} end={{ x: 1, y: 1 }}>
            <View style={styles.Cirkle}>
                <Text style={{ fontSize: 60, fontWeight: 700 }}> CODE </Text>
            </View>
            <View style={styles.Title1}>
                <Text style={styles.TextTitle1}>VERIFICATION</Text>
            </View>
            <View style={styles.Title2}>
                <Text style={styles.TextTitle2}>Enter ontime password sent on</Text>
                <Text style={styles.TextTitle2}>++849092605798</Text>
            </View>
            <View style={styles.Input}>
                <View style={styles.inputView}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={styles.txtInput}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(text) => handleChange(text, index)}
                            value={digit}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btns}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>VERIFY CODE</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Roboto',
    },
    Cirkle: {
        flex: 4,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title1: {
        flex: 1,
        justifyContent: 'flex-start',
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
        fontWeight: 700,
        fontSize: 15,
    },
    Input: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 300
    },
    txtInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20
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
        width: 339,
        fontWeight: 700,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
const colorList = ['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9'];
export default App3;