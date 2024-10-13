import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const Userinfo = () => {
    const [name, setName] = useState('');
    const router = useRouter();
    const handleNavigation = () => {
        const uesrName = name.trim();
        if (uesrName) {

            router.push(`/${uesrName}`);
            setName('')
        }
    }
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="mb-7 text-2xl font-thin ">User info</Text>
            <View className="w-[300px]">
                <TextInput
                    placeholder='enter your name'
                    value={name}

                    onChangeText={setName}
                    className="border border-green-700 rounded-xl w-full p-4 mb-3"
                />
                <Pressable
                    onPress={handleNavigation}
                >
                    <Text className="text-2xl w-full p-4 bg-yellow-500 text-center text-white">Go</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Userinfo