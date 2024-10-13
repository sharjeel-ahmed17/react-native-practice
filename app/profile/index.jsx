import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Ionicons from "react-native-vector-icons/Ionicons"

const Profile = () => {
    const router = useRouter();
    return (
        <View className="flex-1">
            <Ionicons name='arrow-back' size={30} color="blue" className="mt-20" onPress={() => router.push("/")} />
            <View className="justify-center items-center h-screen text-center">
                <Text className="text-4xl ">Profile </Text>
                <Text>hello world</Text>
                <Pressable onPress={() => router.push("/profile/settings")} className="mt-5 ">

                    <Text className="p-4 bg-blue-600 rounded-xl text-white text-xl">Go To Settings </Text>
                </Pressable>
                <Pressable onPress={() => router.push("/profile/tabs")} className="mt-5 ">

                    <Text className="p-4 bg-blue-600 rounded-xl text-white text-xl">Go to profile tabs </Text>
                </Pressable>


            </View>
        </View>
    )
}

export default Profile