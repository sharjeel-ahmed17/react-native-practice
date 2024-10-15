import { View, Text, Image } from 'react-native'
import React from 'react'

const UiScreen = () => {
    return (
        <View className="flex-1 justify-center items-center">
            {/* <Text className="text-4xl text-center p-4 bg-black text-white">UiScreen</Text> */}
            <Image

                source={require('../assets/images/whatsapp.png')}
                style={{ width: 100, height: 100 }}
            // source={uri('https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg')}

            />
            <Text className="text-2xl mt-3 font-bold">Whats Apps</Text>
        </View>
    )
}

export default UiScreen