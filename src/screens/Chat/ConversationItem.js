import React from 'react';
import { View, Text, Image } from 'react-native';

export const ConversationItem = ({ name, avatar, lastMessage, isSeen, lastTime }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <View style={{
                width: 70, height: 70, borderRadius: 35, borderWidth: 2,
                borderColor: '#fff', overflow: 'hidden', marginRight: 16
            }}>
                <Image source={{
                    uri: avatar
                }}
                    style={{ flex: 1, overflow: 'hidden' }} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                    {name}
                </Text>
                <View style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, color: 'gray', marginRight: 8 }} numberOfLines={1} ellipsizeMode='tail'>
                        {lastMessage}
                    </Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>
                        {lastTime}
                    </Text>
                </View>
            </View>
            {
                isSeen
                    ? <Image style={{ width: 16, height: 16, borderRadius: 8, marginLeft: 16 }}
                        source={{ uri: avatar }}
                    />
                    : <View
                        style={{ width: 16, height: 16, borderRadius: 8, marginLeft: 16, backgroundColor: 'transparent' }}
                    />
            }
        </View>
    );
}