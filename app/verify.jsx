import { View, Text, TextInput } from 'react-native'

import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';


const VerifyNumber = () => {

    const router = useRouter();
    return (
        <View className="flex-1  items-center">
            <View className="justify-between flex-1">
                <View className=" p-5 text-center">
                    <Text className="text-center capitalize text-green-600 text-2xl font-['outfit-bold']">Verifying your number</Text>

                    <View className="mt-12 text-[25px] font-[outfit-medium] mb-14">
                        <Text className="text-center text-[16px]">You’ve tried to register +911234567890</Text>
                        <Text className="text-center text-[16px]">recently. Wait before requesting an sms or a call.
                        </Text>

                        <Text className="text-center">
                            with your code.

                            <Text className="text-center text-green-600 text-[16px]">   Wrong number?</Text>

                        </Text>

                    </View>
                    {/* drop down */}
                    <View className="flex flex-row gap-2 mb-12">

                        <TextInput className='w-12 h-12 bg-gray-300 rounded-md' />
                        <TextInput className='w-12 h-12 bg-gray-300 rounded-md' />
                        <TextInput className='w-12 h-12 bg-gray-300 rounded-md' />
                        <TextInput className='w-12 h-12 bg-gray-300 rounded-md' />
                        <TextInput className='w-12 h-12 bg-gray-300 rounded-md' />
                        <TextInput className='w-12 h-12 bg-gray-300 rounded-md' />

                    </View>
                    <Text className="text-center text-green-600 text-[18px] font-['outfit-medium']">   Didn’t receive code?</Text>


                </View>
                <View className=" p-5"><TouchableOpacity
                    onPress={() => router.push('/user-profile')
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

export default VerifyNumber