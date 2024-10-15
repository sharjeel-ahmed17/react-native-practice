import { View, Text } from 'react-native'
import React from 'react'
import WhatsAppTabsLayout from './tabs/_layout'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const WhatsApp = () => {
    const router = useRouter();
    return (
        <View>
            {/* <WhatsAppTabsLayout /> */}
            <TouchableOpacity onPress={() => router.push("/whatsapp/tabs")}>
                <Text>go to whatsapp</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WhatsApp