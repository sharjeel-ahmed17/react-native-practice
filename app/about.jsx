import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Animated, {
    SlideInLeft, SlideInRight, SlideOutRight, ZoomIn, ZoomOut
} from 'react-native-reanimated'

const About = () => {
    const router = useRouter();
    return (
        <Animated.View
            entering={ZoomIn.duration(500)}
            exiting={ZoomOut.duration(500)}
            className="flex-1 justify-center items-center">
            <Text className="text-4xl" > this is about</Text>
            {/* <Link href="/about" asChild>
                <Pressable>

                    <Text className="text-5xl p-4 bg-black text-white">hello</Text>

                </Pressable>
            </Link> */}

            <Pressable
                onPress={() => router.push('/')}
            >
                <Text className="p-4 bg-red-50 ">go to about</Text>
            </Pressable>
        </Animated.View>
    )
}

export default About