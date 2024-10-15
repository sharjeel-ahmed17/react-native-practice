import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'

const onSubmit = (data, { reset }) => {
    console.log(data);

    Alert.alert('Success', 'Account created successfully', [{ text: 'OK', onPress: () => reset() }]);
}

const schema = yup.object().shape({
    email: yup
        .string()
        .required('email is required')
        .email('please enter a valid email'),
    password: yup
        .string()
        .required('password is required')
        .min(6, 'password must be atleast 6 character long'),
    confirmPassword: yup
        .string()
        .required('confirm password is required')
        .oneOf([yup.ref('password'), null], 'passwords must match'),
})
const Rejister = () => {
    const { handleSubmit, reset, control, trigger, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <View className="flex-1 justify-center bg-gray-100 p-8">
            <Text className="text-4xl font-normal text-center">Create Account</Text>

            {/* email */}
            <Controller
                control={control}
                name='email'
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TextInput
                            className="p-4 mb-4 border border-green-300 shadow-lg rounded-lg"
                            placeholder='Enter your email'
                            placeholderTextColor="#A0AEC0"
                            onChangeText={(text) => {
                                onChange(text)
                                trigger('email')
                            }}
                            onBlur={() => {
                                onBlur()
                                trigger('email')

                            }}
                            value={value}
                            keyboardType='email-address'
                            autoCapitalize='none'

                        />

                        {errors.email && <Text>{errors.email.message}</Text>}


                    </>

                )

                }
            />
            {/* password */}
            <Controller
                control={control}
                name='password'
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TextInput
                            className="p-4 mb-4 border border-green-300 shadow-lg rounded-lg"
                            placeholder='Enter your email'
                            placeholderTextColor="#A0AEC0"
                            onChangeText={(text) => {
                                onChange(text)
                                trigger('password')
                            }}
                            onBlur={() => {
                                onBlur()
                                trigger('password')

                            }}
                            value={value}

                            secureTextEntry={true}

                        />

                        {errors.password && <Text>{errors.password.message}</Text>}


                    </>

                )

                }
            />
            {/* confirm pasword */}
            <Controller
                control={control}
                name='confirmPassword'
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TextInput
                            className="p-4 mb-4 border border-green-300 shadow-lg rounded-lg"
                            placeholder='Enter your email'
                            placeholderTextColor="#A0AEC0"
                            onChangeText={(text) => {
                                onChange(text)
                                trigger('confirmPassword')
                            }}
                            onBlur={() => {
                                onBlur()
                                trigger('confirmPassword')

                            }}
                            value={value}
                            secureTextEntry={true}

                        />

                        {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}


                    </>

                )

                }
            />

            {/* submit button */}
            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
            >
                <Text className="py-3 px-16 bg-green-600 text-white font-bold text-2xl rounded-full text-center">Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Rejister