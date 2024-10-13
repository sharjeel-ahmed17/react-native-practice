import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router'
const Settings = () => {
    const router = useRouter();
    return (



        <View className="flex-1 justify-center items-center bg-yellow-400">
            <Ionicons size={24} color={'dark-green'} name='arrow-back' onPress={() => router.back()} className='' />

            <Text className="text-3xl text-black font-bold">Settings</Text>

        </View>



    )
}

export default Settings