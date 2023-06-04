import { View, Text, Image, Pressable, Button } from 'react-native'
import React from 'react'

const Splash = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('Home')
    }
    const goSearch = () => {
        console.log("hiiiii")
        navigation.navigate('Search')
    }

    return (
        <View style={{ height: "100%", alignItems: "center", backgroundColor: "pink" }}>
            <Pressable onPress={onPress}>
                <Image source={{ uri: 'https://pbs.twimg.com/media/Er87LKSUwAAGLc5.jpg' }}
                    style={{ width: 400, height: 300 }} />
            </Pressable>
            <Button title="Press me" onPress={goSearch}>
            </Button>
        </View>
    )
}

export default Splash