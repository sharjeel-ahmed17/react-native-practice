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


// import { View, Text } from 'react-native'
// import React from 'react'
// import { Image } from 'react-native'
// import { Pressable, TouchableOpacity } from 'react-native';
// import { Link } from 'expo-router'

// const About = () => {
//     return (
//         <View className="flex-1 items-center">
//             <View className="mt-[20%]">
//                 <Image
//                     source={require('../assets/images/circle.png')}
//                 >

//                 </Image>
//             </View>
//             <View className="mt-[5%]">

//                 <Text className="text-3xl font-['outfit-medium']">Welcome to WhatsApp</Text>
//             </View>
//             <View className="mt-2">
//                 <Text>
//                     Read out
//                     <Link href='#' asChild>
//                         <Pressable>
//                             <Text className='text-blue-400 p-0 m-0'>

//                                 Privacy Policy.
//                             </Text>
//                         </Pressable>

//                     </Link>
//                     Tap “Agree and continue”
//                 </Text>
//             </View>
//             <View>
//                 <Text>
//                     to accept the

//                     <Link href='#' asChild>
//                         <Pressable>
//                             <Text className='text-blue-400 p-0 m-0'>

//                                 Teams of Service.
//                             </Text>
//                         </Pressable>

//                     </Link>

//                 </Text>
//             </View>


//             <TouchableOpacity className="mt-[25%]">
//                 <Text className="bg-green-600 px-10 py-3 rounded-full text-white font-['outfit'] text-2xl ">Agree and Continue</Text>
//             </TouchableOpacity>













//         </View>
//     )
// }

// export default About