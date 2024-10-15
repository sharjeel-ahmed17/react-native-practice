import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Animated, { SlideInLeft, SlideInRight, SlideOutLeft, SlideOutRight, ZoomIn, ZoomOut } from 'react-native-reanimated'
import { useDrawerStatus } from '@react-navigation/drawer'

const index = () => {
    const router = useRouter();
    const isDrawerOpen = useDrawerStatus() === "open";
    return (
        <Animated.View
            entering={ZoomIn.duration(500)}
            exiting={ZoomOut.duration(500)}
            className="flex-1 justify-center items-center">
            <Text className="text-4xl bg-green-600 p-4 text-white" > sharjeel ali bari</Text>
            {/* <Link href="/about" asChild>
                <Pressable>

                    <Text className="text-5xl p-4 bg-black text-white">hello</Text>

                </Pressable>
            </Link> */}
            {
                // isDrawerOpen && (
                //     <Pressable
                //         onPress={() => router.push('/settings')}
                //     >
                //         <Text className="p-4 bg-red-50 ">go to settings</Text>
                //     </Pressable>
                // )
                isDrawerOpen ? <Text>Drawer is open</Text> : <Text>Drawer is closed</Text>

            }

            <Pressable
                className="bg-brown-600 p-4 rounded-md"
                onPress={() => router.push('/rejister')}
            >
                <Text className="text-green-400 text-2xl text-center">Create an account</Text>
            </Pressable>
            <Pressable
                onPress={() => router.push('/about')}
            >
                <Text className="p-4 bg-red-50 ">go to about</Text>
            </Pressable>
            <Pressable
                className="bg-green-600 p-4 rounded-md"
                onPress={() => router.push('/tabs')}
            >
                <Text className="text-white text-center">Go to Tab Screen</Text>
            </Pressable>
            <Pressable
                className="bg-indigo-600 p-4 rounded-md"
                onPress={() => router.push('/userinfo')}
            >
                <Text className="text-white text-center">Go to user screen</Text>
            </Pressable>
            <Pressable
                className="bg-indigo-600 p-4 rounded-md"
                onPress={() => router.push('/profile')}
            >
                <Text className="text-white text-center">go to profile</Text>
            </Pressable>
            <Pressable
                className="bg-brown-600 p-4 rounded-md"
                onPress={() => router.push('/ui')}
            >
                <Text className="text-white text-center">go to ui screen</Text>
            </Pressable>

        </Animated.View>
    )
}

export default index;


// import { View, Text, Image, Pressable } from 'react-native'
// import React from 'react'
// import { Link } from 'expo-router'

// const Index = () => {
//     return (
//         <View className="flex-1 justify-center items-center">

//             <Image
//                 source={require('../assets/images/whatsapp.png')}
//                 style={{ width: 100, height: 100 }}
//             />

//             <Text className="font-['outfit-bold'] text-3xl mt-2">WhatsApp</Text>

//             <Link href="/about" asChild>
//                 <Pressable>

//                     <Text className="mt-4 text-2xl">Next Screen</Text>

//                 </Pressable>
//             </Link>
//         </View>
//     )
// }

// export default Index