import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

export const StoryItem = ({ storyImage, userName, userAvatar }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={{
            width: 100, height: 150, borderRadius: 12, backgroundColor: '#333333', padding: 8,
            marginLeft: 8, padding: 0, overflow: 'hidden'
        }}>
            <View style={{
                width: 36, height: 36, borderRadius: 18, borderWidth: 3, borderColor: '#1d84f8',
                position: 'absolute', top: 8, left: 8, overflow: 'hidden'
            }}>
                <Image
                    source={{ uri: userAvatar }}
                    style={{ flex: 1 }}
                />
            </View>
            <Image
                source={{ uri: storyImage }}
                style={{ flex: 1, zIndex: -1 }}
            />
            <Text style={{
                fontSize: 12, fontWeight: 'bold', color: '#fff',
                position: 'absolute', bottom: 8, left: 8
            }}>
                {userName}
            </Text>
        </TouchableOpacity>
    );
}