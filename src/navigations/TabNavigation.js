import React from 'react';

// import screens
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Contacts from '../screens/Contacts';

// import libs
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator(
    {
        Chat: Chat,
        Contacts: Contacts,
        Profile: Profile
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Chat':
                        iconName = 'ios-chatbubbles';
                        break;
                    case 'Contacts':
                        iconName = 'ios-contacts';
                        break;
                    case 'Profile':
                        iconName = 'ios-settings';
                        break;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={30} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#686e76',
            style: {
                backgroundColor: '#0a0a0a'
            },
            showLabel: false
        }
    }
)

export default createAppContainer(TabNavigator);