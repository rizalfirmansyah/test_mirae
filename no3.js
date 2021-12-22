import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Keyboard, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d22",
        title: "4 Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-14551e29d72",
        title: "5 Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-45571e29d72",
        title: "6 Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-14557129d72",
        title: "7 Item",
    },
];

const index = () => {
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    const [datas, setData] = useState([]);
    const [datas2, setData2] = useState([]);
    const [search, setSearch] = useState('');



    useEffect(() => {
        loadData()
        return () => {
            // cleanup
        }
    }, [])

    const loadData = async () => {
        const data = await axios.get('https://api.github.com/search/users?q=rizal&per_page=10');
        setData(data.data.items)

        
    }

    const handleRefresh = () => {
        setLoad(true)
        loadData()
    }


    const searchData = (text) => {
        setSearch(text)
        test()
    }

    const test = () => {
        datas.filter(item => 
            setData2(item.login.includes(search))
        )
    }

    

    


    // console.log('load', load)

    /* method Get */
    // const responseItem = await axios.get('http://18.142.59.123/api/get-sales-item/' + sj_id, { headers: { "Authorization": `Bearer ${token}` } });
    /* method POST */
    // axios({
    //     method: "POST",
    //     url: "http://18.142.59.123/api/stock-opname",
    //     headers: { "Authorization": `Bearer ${token}` },
    //     data: {
    //         // "warehouse": data,
    //     },
    // })
    //     .then(res => {

    //     })
    //     .catch(error => {

    //     });



    console.log('datas', datas2)

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SafeAreaView />

            <TextInput
                style={[styles.textInput]}
                onChangeText={text => searchData(text)}
                value={search}
                // autoCompleteType="email"
                // onFocus={() => setIsFocusedEmail(true)}
                // onBlur={() => setIsFocusedEmail(false)}
                returnKeyType={"next"}
                placeholder={"Search"}
                placeholderTextColor="#9AA4AF"
            />

            <FlatList
                style={{ marginVertical: 10 }}
                refreshing={load}
                onRefresh={handleRefresh.bind(this)}
                data={search == '' ? datas : datas2}
                keyExtractor={(item) => item.id.toString()}
                // scrollEnabled="false"
                renderItem={({ item: data }) => (
                    <View style={{ flexDirection: 'row', margin: 10, padding: 10, backgroundColor: '#ffffff90', borderColor: 'black', borderWidth: 1 }}>
                        <View>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{uri: data.avatar_url }}
                            />
                        </View>
                        <View>
                            <Text>{data.login}</Text>
                        </View>

                    </View>
                )}
            />


        </View>
    )
}

export default index

const styles = StyleSheet.create({
    textInput: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#fdefec',
        color: '#000',
        borderWidth: 1
    }
})
