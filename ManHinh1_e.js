import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
// yarn add react-native-radio-buttons-groupreact-native-radio-buttons-group
// import React, { useMemo, useState } from 'react';
// import RadioGroup from 'react-native-radio-buttons-group';
const App2 = () => {
    return (
        <View style={styles.container}>
            <View style = {{flex:1}}>
                <View style={styles.Login}>
                    <Text style={styles.titleLogin}>REGISTER</Text>
                </View>
                <View style={styles.Input}>
                    <TextInput placeholder='Name' placeholderTextColor='#000000' style={styles.inputText} />
                </View>
                <View style={styles.Input}>
                    <TextInput placeholder='Phone' placeholderTextColor='#000000' style={styles.inputText} />
                </View>
                <View style={styles.Input}>
                    <TextInput placeholder='Email' placeholderTextColor='#000000' style={styles.inputText} />
                </View>
                <View style={styles.Pwd}>
                    <View style={styles.groupPwd}>
                        <TextInput placeholder='Password' placeholderTextColor='#000000' style={styles.inputPwd} />
                        <Image source={require('./image/eye 1.png')} style={styles.eye} />
                    </View>
                </View>
                <View style={[styles.Input, { marginBottom: 0 }]}>
                    <TextInput placeholder='Birthday' placeholderTextColor='#000000' style={styles.inputText} />
                </View>
                <View style={styles.radioArea}>
                    <View style={[styles.radioGroup, { left: 10 }]}>
                        <Image source={require('./image/rdb.png')} />
                        <Text style={{ left: 10 }}>Male</Text>
                    </View>
                    <View style={styles.radioGroup}>
                        <Image source={require('./image/rdb.png')} />
                        <Text style={{ left: 10 }}>Female</Text>
                    </View>
                </View>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1.5, alignItems: 'center', top: 10, fontSize: 14 }}>
                    <Text>When you agree to terms and conditions</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8EFDF',
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Login: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleLogin: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    Input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2
    },
    inputText: {
        width: 330,
        height: 54,
        backgroundColor: '#C4C4C44D',
        paddingLeft: 20,
        bottom: 15,
        fontSize: 18,
    },
    Pwd: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,

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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        top: 20,
        bottom: 0,
    },
    btns: {
        backgroundColor: '#E53935',
        height: 48,
        width: 330,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioArea: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 30
    }
});
export default App2;