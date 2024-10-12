import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Pressable, TextInput } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router';

const Userinfo = () => {
    const [name, setName] = useState('');
    const router = useRouter();
    const handleNavigation = () => {
        const uesrName = name.trim();
        if (uesrName) {

            router.push(`/${uesrName}`);
        }
    }
    return (
        <View className="flex-1 justify-center items-center">
            <Text>Userinfo</Text>
            <View>
                <TextInput
                    placeholder='enter your name'
                    value={name}

                    onChangeText={setName}
                    className="border border-green-700 rounded-xl"
                />
                <Pressable
                    onPress={handleNavigation}
                >
                    <Text className="text-xl w-full p-4 bg-yellow-500">Go</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Userinfo