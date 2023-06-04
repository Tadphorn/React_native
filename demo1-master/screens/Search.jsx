import { View, Text, ScrollView, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Search = ({ navigation }) => {
  const onPressItem = (id, name) => {
    navigation.navigate('Detail', { id: id, name: name })
  }
  const [data1, setData1] = useState([])
  const fetchAPI1 = () => {
    axios.get('https://www.melivecode.com/api/attractions')
      .then(response => {
        setData1(response.data)
        console.log(data1)
      })
      .catch(error => {
        console.log(error);
      });

  }

  useEffect(() => {
    fetchAPI1()
  }, [])

  const renderItem = ({ item }) => {
    <Pressable onPress={() => onPressItem(item.id, item.name)} key={item.id} >
      <View style={{ alignItems: "center" }}>

        <Image source={{ uri: item.coverimage }}
          style={{ width: 340, height: 300 }} />

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 23 }}>{item.name}</Text>
          <Text style={{ fontSize: 18 }} numberOfLines={3}>
            {item.detail}
          </Text>
        </View>

      </View>
    </Pressable>
  }

  return (
    <View>
      <Text>Searching888</Text>
      {/* <Text> {data1} </Text> */}
      <FlatList
        data={data1}
        renderItem={renderItem}
        keyExtractor={item => item.id}

      />
    </View>
  )
}

export default Search