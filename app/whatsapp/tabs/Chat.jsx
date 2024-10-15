import { View, Text, Image } from 'react-native'
import React from 'react'

const Chat = () => {
    return (
        <View className="flex-1 items-start p-5">
            <View>
                <View className="mx-auto w-20 h-20 rounded-full bg-gray-200 justify-center items-center">

                    <Image
                        source={require('../../../assets/images/photo-camera.png')}
                    >

                    </Image>
                </View>

            </View>
        </View>
    )
}

export default Chat