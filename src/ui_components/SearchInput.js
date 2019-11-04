//import liraries
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const SearchInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Icon name='ios-search' size={20} color='#fff' />
                <TextInput
                    style={styles.input}
                    placeholderTextColor='#8e8e93'
                    placeholder='Tìm kiếm'
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    inputWrapper: {
        height: 40, width: '100%', borderRadius: 20, backgroundColor: '#333333',
        paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center',
    },
    input: {
        flex: 1, paddingLeft: 12, fontSize: 16, color: '#fff'
    }
});

//make this component available to the app
export default SearchInput;
