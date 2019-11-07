//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import CommonHeader from '../../ui_components/CommonHeader';
import SearchInput from '../../ui_components/SearchInput';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ContactItem } from './ContactItem';
import { StoryItem } from './StoryItem';
import { contacts, stories } from './contactData';
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

    renderHeader = () => {
        return (
            <View>
                <CommonHeader
                    title='Danh bạ'
                    leftIcon='chat-processing'
                    rightIcon='account-plus'
                />
                <SearchInput />
                <View style={{ paddingVertical: 16 }}>
                    <ScrollView horizontal>
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
            </View>
        );
    }

    render() {
        return (
            <FlatList
                contentContainerStyle={styles.container}
                ListHeaderComponent={this.renderHeader}
                data={contacts}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000',
    },
    itemWrapper: {
        width: 100, height: 150, borderRadius: 12, backgroundColor: '#333333', padding: 8
    }
});

//make this component available to the app
export default Contacts;
