import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DynamicScreen = () => {
    const { name } = useLocalSearchParams();
    return (
        <View>
            <Text>DynamicScreen</Text>
            <View>
                <Text>Welcome to {name}</Text>
            </View>
        </View>
    )
}

export default DynamicScreen