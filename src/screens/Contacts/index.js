//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import CommonHeader from '../../ui_components/CommonHeader';
import SearchInput from '../../ui_components/SearchInput';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const stories = [
    {
        storyImage: 'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        userName: 'Huyên Doãn',
        userAvatar: 'https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png'
    },
    {
        storyImage: 'https://images.all-free-download.com/images/graphicthumb/beautiful_natural_scenic_03_hd_picture_166230.jpg',
        userName: 'Quyết Trần',
        userAvatar: 'https://img.pngio.com/fileavatar-poe84itpng-avatar-png-580_580.png'
    },
];

const contacts = [
    {
        userName: 'Bình Phạm',
        userAvatar: 'https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png',
        isOnline: false,
        lastOnlineAt: "8'"
    },
    {
        userName: 'Huyên Doãn',
        userAvatar: 'https://i7.pngguru.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg',
        isOnline: true,
    },
    {
        userName: 'Quyết Trần',
        userAvatar: 'https://img.pngio.com/fileavatar-poe84itpng-avatar-png-580_580.png',
        isOnline: true,
    },
]
// create a component
class Contacts extends Component {

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, index }) => {
        let { userName, userAvatar, isOnline, lastOnlineAt } = item;
        return (
            <ContactItem
                key={index}
                userName={userName}
                userAvatar={userAvatar}
                isOnline={isOnline}
                lastOnlineAt={lastOnlineAt}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <CommonHeader
                    title='Danh bạ'
                    leftIcon='chat-processing'
                    rightIcon='account-plus'
                />
                <SearchInput />
                <View style={{ paddingVertical: 16 }}>
                    <ScrollView horizontal style={{ paddingHorizontal: 16 }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.itemWrapper}>
                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                width: 24, height: 24, borderRadius: 12, backgroundColor: '#000'
                            }}>
                                <MDIcon name='plus' size={20} color='#fff' style={{ flex: 1, textAlign: 'center', marginTop: 2 }} />
                            </View>
                            <Text style={{
                                fontSize: 14, fontWeight: 'bold', color: '#fff',
                                position: 'absolute', bottom: 8, left: 8
                            }}>
                                {'Tin của\nbạn'}
                            </Text>
                        </TouchableOpacity>
                        {
                            stories.map((story, index) => {
                                let { storyImage, userName, userAvatar } = story;
                                return (
                                    <StoryItem
                                        key={index}
                                        storyImage={storyImage}
                                        userName={userName}
                                        userAvatar={userAvatar}
                                    />
                                );
                            })
                        }
                    </ScrollView>
                </View>
                <FlatList
                    style={{ paddingHorizontal: 16 }}
                    data={contacts}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const StoryItem = ({ storyImage, userName, userAvatar }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.itemWrapper, { marginLeft: 8, padding: 0, overflow: 'hidden' }]}>
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
const ContactItem = ({ userAvatar, userName, isOnline, lastOnlineAt }) => {
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
                    style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: '#333333', flexDirection: 'row', alignItems: 'center' }}>
                    <MDIcon name='hand' size={22} color='#fff' style={{ flex: 1, textAlign: 'center', marginTop: 2 }} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        backgroundColor: '#000',
    },
    itemWrapper: {
        width: 100, height: 150, borderRadius: 12, backgroundColor: '#333333', padding: 8
    }
});

//make this component available to the app
export default Contacts;
