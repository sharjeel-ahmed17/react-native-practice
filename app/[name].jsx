import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const DynamicScreen = () => {
    const { name } = useLocalSearchParams();
    const navigation = useNavigation();
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
        </View>
    )
}

export default DynamicScreen