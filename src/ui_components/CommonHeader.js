//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const CommonHeader = ({ title, leftIcon, rightIcon }) => {
    return (
        <View style={styles.header}>
            <View style={styles.leftHeader}>
                <View style={styles.avatar}>
                    <Image source={{
                        uri: 'http://pngimg.com/uploads/girls/girls_PNG6466.png'
                    }}
                        style={{ flex: 1, overflow: 'hidden' }} />
                </View>
                <Text style={styles.bigTitlte}>
                    {title}
                </Text>
            </View>
            <View style={styles.rightHeader}>
                <TouchableOpacity activeOpacity={0.7} style={styles.rightButton}>
                    <MDIcon color='#fff' name={leftIcon} size={24} style={styles.buttonIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.rightButton, { marginLeft: 16 }]}>
                    <MDIcon color='#fff' name={rightIcon} size={24} style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const AVATAR_SIZE = 45;
// define your styles
const styles = StyleSheet.create({
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
    leftHeader: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    rightHeader: { flexDirection: 'row', flexDirection: 'row' },
    avatar: {
        width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE / 2,
        overflow: 'hidden', borderWidth: 3, borderColor: '#fff'
    },
    bigTitlte: {
        fontSize: 32, fontWeight: 'bold', color: '#fff', marginLeft: 16
    },
    rightButton: {
        width: 40, height: 40, borderRadius: 20, backgroundColor: 'gray',
        flexDirection: 'row', alignItems: 'center'
    },
    buttonIcon: { flex: 1, textAlign: 'center' },
});

//make this component available to the app
export default CommonHeader;
