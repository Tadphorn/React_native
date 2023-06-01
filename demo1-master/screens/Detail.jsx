import { View, Text, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Detail = ({ navigation, route }) => {

    const [item, setItem] = useState([])
    const fetchDetail =()=>{
        axios.get('https://www.melivecode.com/api/attractions/' + route.params.id)
        .then(response => {
            setItem(response.data.attraction)
          
        })
        .catch(error => {
          console.log(error); 
        });
        
    } 
    useEffect(() => {
        fetchDetail()
        console.log(item)        
      }, [])
  return (
    <View>
      <View style={{ alignItems: "center" }}>                
                  <View style={{ padding: 20 }}>
                      <Text style={{ fontSize: 23 }}>{item.name}</Text>
                      <Text style={{ fontSize: 18 }}>
                         {item.detail}
                      </Text>
                  </View>
                  <Image source={{ uri: item.coverimage }}
                      style={{ width: 340, height: 300 }} />
          </View>
    </View>
  )
}

export default Detail