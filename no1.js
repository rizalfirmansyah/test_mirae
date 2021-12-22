import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
} from 'react-native-shared-element';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const dataArray = ["A","C","K","B","C","E","B"]

const index = () => {
    const navigation = useNavigation();

    useEffect(() => {
        loadFirstElement()
        // getData()
        return () => {
            // cleanup
        }
    }, [])

    


    const loadFirstElement = () => {
        let findDuplicates = dataArray => dataArray.filter((item, index) => dataArray.indexOf(item) != index)
        console.log(findDuplicates(dataArray))
    }

    // const getData = async () => {
    //     setTimeout(() => {
    //         navigation.navigate('Auth', { screen: 'loginscreens' });
    //     }, 3000);
    // }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
            <SafeAreaView />
            <Image
                style={{ width: '70%', height: '30%' }}
                source={require('../../assets/image2.png')}
            />
        </View>
    )
}

export default index

const styles = StyleSheet.create({

})
