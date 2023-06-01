import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const Splash = ({ navigation }) => {
    const onPress =()=>{
        navigation.navigate('Home')
    }

    return (
        <View style={{ height: "100%", alignItems: "center", backgroundColor: "pink" }}>  
            <Pressable onPress={onPress}>
            <Image source={{uri: 'https://pbs.twimg.com/media/Er87LKSUwAAGLc5.jpg'}}
            style={{width: 400, height: 300}} />
            </Pressable>
            {/* <Image source={require('../img/2022-05-26 (1).png')} style={{ width: 150, height: 150 }} /> */}
        </View>
    )
}

export default Splash