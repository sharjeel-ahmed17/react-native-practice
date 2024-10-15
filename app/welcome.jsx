import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const Welcome = () => {
    const router = useRouter();
    return (
        <View className="flex-1 justify-center items-center">
            <Image
                source={require('../assets/images/circle.png')}
                className="mt-20"
            ></Image>
            <Text className="text-3xl capitalize mt-12 font-['outfit-medium']">Welcome to WhatsApp</Text>
            {/* 2 line quotes */}
            <View className="mt-2 ">

                <Text className="capitalize font-['outfit'] text-[16px]">read out <Text onPress={() => console.log('hello world')
                } className="text-blue-600">privacy policy.</Text> Tap "agree and continue" </Text>
                <Text className="capitalize font-['outfit'] text-[16px] text-center">to accept the
                    <Text onPress={() => console.log('hello world')
                    } className="text-blue-600">terms of services</Text>

                </Text>
            </View>
            {/* button */}
            <TouchableOpacity className="mt-44"
                onPress={() => router.push('/phone-number')
                }
            >
                <Text className="py-3 px-16 bg-green-600 text-white capitalize font-['outfit-bold'] text-2xl rounded-full">agree and continue</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Welcome