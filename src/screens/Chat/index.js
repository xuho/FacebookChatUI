//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonHeader from '../../ui_components/CommonHeader';
import SearchInput from '../../ui_components/SearchInput';
import { UserItem } from './UserItem';
import { ConversationItem } from './ConversationItem';
import { listConversations, users } from './mockData';
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

    renderHeader = () => {
        return (
            <View>
                <CommonHeader
                    title='Chat'
                    leftIcon='camera-enhance'
                    rightIcon='pencil'
                />
                <SearchInput />
                <View style={{ marginVertical: 8 }}>
                    <ScrollView horizontal style={{ marginVertical: 16 }}>
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
                        {
                            users.map((user, index) => {
                                let { name, avatar, isOnline } = user;
                                return (
                                    <UserItem
                                        key={`${name}-${index}`}
                                        name={name}
                                        avatar={avatar}
                                        isOnline={isOnline} />
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <FlatList
                    ListHeaderComponent={this.renderHeader}
                    style={{ paddingHorizontal: 16 }}
                    data={listConversations}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
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
