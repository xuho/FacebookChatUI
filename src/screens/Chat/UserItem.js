//import liraries
import React from 'react';
import { View, Text, Image } from 'react-native';

export const UserItem = ({ avatar, name, isOnline }) => {
    return (
        <View style={{ marginHorizontal: 8 }}>
            {
                isOnline
                    ? <View style={{
                        width: 16, height: 16, borderRadius: 8, backgroundColor: '#6cd64f',
                        position: 'absolute', top: 50, right: 8, zIndex: 1000, borderWidth: 3, borderColor: '#000'
                    }} />
                    : null
            }
            <View style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 2, borderColor: '#fff', overflow: 'hidden' }}>
                <Image source={{
                    uri: avatar
                }}
                    style={{ flex: 1, overflow: 'hidden' }} />
            </View>
            <Text
                numberOfLines={1} ellipsizeMode='tail'
                style={{ width: 60, fontSize: 14, color: '#fff', marginTop: 8, textAlign: 'center' }}>
                {name}
            </Text>
        </View>
    );
}