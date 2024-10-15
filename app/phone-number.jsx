import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import { SelectList } from 'react-native-dropdown-select-list'

const PhoneNumber = () => {
    const [selected, setSelected] = useState("");
    const data = [
        { key: '1', value: 'pakistan' },
        { key: '2', value: 'india' },
        { key: '3', value: 'srilanka' },


    ]
    const router = useRouter();
    return (
        <View className="flex-1  items-center">
            <View className="justify-between flex-1">
                <View className=" p-5 text-center">
                    <Text className="text-center capitalize text-green-600 text-2xl font-['outfit-bold']">Enter your phone number</Text>

                    <View className="mt-12 text-[25px] font-[outfit-medium]">
                        <Text className="text-center text-[16px]">WhatsApp will need to verify your phone</Text>
                        <Text className="text-center text-[16px]">number. Carrier charges may apply.</Text>
                        <Text className="text-center text-green-600 text-[16px]"> What’s my number?</Text>


                    </View>
                    {/* drop down */}
                    <View className="mt-10">
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            className='border-none'
                        />
                        <Text className="mt-4 text-xl border-b-4 border-green-600">+91
                            <TextInput placeholder='hello'></TextInput>
                        </Text>
                    </View>



                </View>
                <View className=" p-5"><TouchableOpacity
                    onPress={() => router.push('/verify')
                    }
                >
                    <Text className="py-3 px-16 bg-green-600 text-white capitalize font-['outfit-bold'] text-2xl rounded-full w-full">           Next        </Text>
                </TouchableOpacity></View>
                {/* <View>bottom</View> */}
                {/* <Text>PhoneNumber</Text> */}

            </View>
        </View>
    )
}

export default PhoneNumber