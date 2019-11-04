//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonHeader from '../../ui_components/CommonHeader';
import SearchInput from '../../ui_components/SearchInput';

const listConversations = [
    {
        avatar: 'https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png',
        name: 'Phạm Bình',
        lastMessage: 'Hello Bình',
        lastTime: '15:34',
        isSeen: true
    },
    {
        avatar: 'https://i7.pngguru.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg',
        name: 'Nguyễn Doãn Huyển',
        lastMessage: 'Xin chào Hòa',
        lastTime: 'Thứ 2',
    },
    {
        avatar: 'https://img.pngio.com/fileavatar-poe84itpng-avatar-png-580_580.png',
        name: 'Quyết Trần',
        lastMessage: 'Hello',
        lastTime: 'CN'
    },
];
// create a component
class Chat extends Component {

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, index }) => {
        let { avatar, name, lastMessage, lastTime, isSeen } = item;
        return (
            <ConversationItem
                key={index}
                avatar={avatar}
                name={name}
                lastMessage={lastMessage}
                lastTime={lastTime}
                isSeen={isSeen}
            />
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <CommonHeader
                    title='Chat'
                    leftIcon='camera-enhance'
                    rightIcon='pencil'
                />
                <SearchInput />

                <View style={{ marginVertical: 8 }}>
                    <ScrollView horizontal style={{ marginVertical: 16, paddingHorizontal: 16 }}>
                        <View style={{ marginRight: 8 }}>
                            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#333333', flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='ios-add' color='#fff' size={45} style={{ flex: 1, textAlign: 'center', marginTop: 4 }} />
                            </View>
                            <Text
                                numberOfLines={1} ellipsizeMode='tail'
                                style={{ width: 60, fontSize: 14, color: '#fff', marginTop: 8 }}>
                                Tin của bạn
                        </Text>
                        </View>
                        <UserItem name='Bình' avatar='https://pngimage.net/wp-content/uploads/2018/05/avatar-perfil-png-1.png' isOnline />
                        <UserItem name='Huyên' avatar='https://i7.pngguru.com/preview/348/800/890/computer-icons-avatar-user-login-avatar-thumbnail.jpg' />
                        <UserItem name='Quyết' avatar='https://img.pngio.com/fileavatar-poe84itpng-avatar-png-580_580.png' isOnline />
                    </ScrollView>
                </View>

                <FlatList
                    scrollEnabled={false}
                    style={{ paddingHorizontal: 16 }}
                    data={listConversations}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />

            </ScrollView>
        );
    }
}


const UserItem = ({ avatar, name, isOnline }) => {
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

const ConversationItem = ({ name, avatar, lastMessage, isSeen, lastTime }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#fff', overflow: 'hidden', marginRight: 16 }}>
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

const AVATAR_SIZE = 45;
// define your styles
const styles = StyleSheet.create({
    container: { flex: 1, paddingVertical: 16, backgroundColor: '#000', },
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
    input: {
        height: 40, width: '100%', borderRadius: 20, backgroundColor: '#333333', paddingHorizontal: 16,
        flexDirection: 'row', alignItems: 'center',
    }
});

//make this component available to the app
export default Chat;
