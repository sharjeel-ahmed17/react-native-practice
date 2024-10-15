import { View, Text, TextInput, Image } from 'react-native'

import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';


const UserProfile = () => {

    const router = useRouter();
    return (
        <View className="flex-1  items-center">
            <View className="justify-between flex-1">
                <View className=" p-5 text-center">
                    <Text className="text-center capitalize text-green-600 text-2xl font-['outfit-bold']">Profile info</Text>

                    <View className="mt-12 text-[25px] font-[outfit-medium] mb-14">
                        <Text className="text-center text-[16px]">Please provide your name and an optional

                        </Text>
                        <Text className="text-center text-[16px]">profile photo
                        </Text>



                    </View>
                    {/* profile */}
                    <View className="mx-auto w-36 h-36 rounded-full bg-gray-200 justify-center items-center">

                        <Image
                            source={require('../assets/images/photo-camera.png')}
                        >

                        </Image>
                    </View>


                    <View className="mt-20 flex justify-around flex-row">
                        <Text className="text-[18px] border-b-2 border-green-600 font-['outfit-medium']">Type your name here</Text>
                        <Image
                            source={require('../assets/images/happy-face.png')}
                        />
                    </View>

                </View>
                <View className=" p-5"><TouchableOpacity
                    onPress={() => router.push('/whatsapp')
                    }
                >
                    <Text className="py-3 px-16 bg-green-600 text-white capitalize font-['outfit-bold'] text-2xl rounded-full w-full text-center">Next</Text>
                </TouchableOpacity></View>
                {/* <View>bottom</View> */}
                {/* <Text>PhoneNumber</Text> */}

            </View>
        </View>
    )
}

export default UserProfile