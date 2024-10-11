import { View, Text } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import Entypo from "react-native-vector-icons/Entypo";
// import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const SecondTab = () => {
    return (
        <Animated.View
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(500)}
            className="flex-1 justify-center items-center bg-white"
        >
            <Entypo name='info-with-circle' size={50} color={"red"} />
            <Text className="text-green-800">Second tabcontent</Text>
        </Animated.View>
    )
}

export default SecondTab