//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { profileSection, optionSection, accountAndSupportSection } from './menuData';

// create a component
class Profile extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: 24 }}>
                    <View style={styles.avatar}>
                        <Image source={{
                            uri: 'http://pngimg.com/uploads/girls/girls_PNG6466.png'
                        }}
                            style={{ flex: 1, overflow: 'hidden' }} />
                    </View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 8 }}>
                        Nguyễn Xuân Hòa
                    </Text>
                </View>
                <Section
                    headerTitle='Trang cá nhân'
                    listItems={profileSection}
                />
                <Section
                    headerTitle='Tùy chọn'
                    listItems={optionSection}
                />
                <Section
                    headerTitle='Tài khoản và hỗ trợ'
                    listItems={accountAndSupportSection}
                />
                <View style={{ height: 32, backgroundColor: 'transparent' }} />
            </ScrollView>
        );
    }
}

const Section = ({ headerTitle, listItems }) => {
    return (
        <View style={{ marginBottom: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray', paddingVertical: 16 }}>
                {headerTitle.toUpperCase()}
            </Text>
            {
                listItems.map((item, index) => {
                    let { icon, iconBackground, title, rightTitle } = item;
                    return (
                        <SectionItem
                            key={`${headerTitle}-${index}`}
                            icon={icon}
                            iconBackground={iconBackground}
                            title={title}
                            rightTitle={rightTitle}
                        />
                    );
                })
            }
        </View>
    );
}
const SectionItem = ({ icon, iconBackground, title, rightTitle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0, 7}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    width: 36, height: 36, borderRadius: 18, backgroundColor: iconBackground,
                    flexDirection: 'row', alignItems: 'center', marginRight: 16
                }}>
                    <Icon
                        style={{ flex: 1, textAlign: 'center' }}
                        size={18}
                        color='#fff'
                        name={icon}
                    />
                </View>
                <Text style={{ fontSize: 16, color: '#fff' }}>
                    {title}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    rightTitle
                        ? <Text style={{ fontSize: 16, color: 'gray', marginRight: 8 }}>
                            {rightTitle}
                        </Text>
                        : null
                }
                <Icon
                    name='chevron-right'
                    size={24}
                    color='gray'
                />
            </View>
        </TouchableOpacity>
    );
}

const AVATAR_SIZE = 80;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 32,
        paddingHorizontal: 16
    },
    avatar: {
        width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE / 2,
        overflow: 'hidden', borderWidth: 3, borderColor: '#fff'
    }
});

//make this component available to the app
export default Profile;
