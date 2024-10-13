import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'

const DynamicScreen = () => {
    const { name } = useLocalSearchParams();
    const navigation = useNavigation();
    // const router = useRouter();
    useEffect(() => {
        navigation.setOptions({ title: "User login screen" });

        return () => {

        }
    }, []);
    return (

        <View className="flex-1 justify-center items-center">

            <Text className='mb-8'>DynamicScreen</Text>
            <View>
                <Text className="text-2xl font-semibold">Welcome to {name}</Text>

            </View>
            {/* <Pressable
                onPress={router.back()}
            >
                <Text className="mt-7 bg-red-400 p-4 text-center">go back</Text>
            </Pressable> */}
        </View>
    )
}

export default DynamicScreen