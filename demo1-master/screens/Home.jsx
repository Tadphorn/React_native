import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Home = ({ navigation }) => {

    const onPressItem = (id, name) => {
        navigation.navigate('Detail', {id: id, name: name})
    }
    const [data, setData] = useState([])
    const fetchAPI =()=>{
        axios.get('https://www.melivecode.com/api/attractions')
        .then(response => {
          setData(response.data)
        //   console.log(data)
        })
        .catch(error => {
          console.log(error); 
        });
        
    } 
    useEffect(() => {
        fetchAPI()        
      }, [])

    return (
        <ScrollView style={{ padding: 10 }}>
            {data.map(item => (
                <Pressable onPress={()=> onPressItem(item.id, item.name)} key={item.id} >
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
            ))

            }
             
        </ScrollView>
    )
}

export default Home