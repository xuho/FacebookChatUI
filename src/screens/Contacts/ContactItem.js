import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ContactItem = ({ userAvatar, userName, isOnline, lastOnlineAt }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 16 }}>
                <Image
                    source={{ uri: userAvatar }}
                    style={{ width: 46, height: 46, borderRadius: 23 }}
                />
                <View

                />
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1,
                borderBottomWidth: 1, borderBottomColor: '#333333', paddingVertical: 16
            }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                    {userName}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        width: 34, height: 34, borderRadius: 17, backgroundColor: '#333333',
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                    <MDIcon name='hand' size={22} color='#fff' style={{ flex: 1, textAlign: 'center', marginTop: 2 }} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}