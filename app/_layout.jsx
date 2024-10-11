
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
const Layout = () => {
    return (
        <GestureHandlerRootView className="flex-1">
            <Drawer>
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: "Home",
                        title: "Home Screen",
                        drawerIcon: ({ color }) => (
                            <Entypo name='home' size={24} color={color} />
                        )
                    }}

                />
                <Drawer.Screen
                    name='about'
                    options={{
                        drawerLabel: "About",
                        title: "About Screen",
                        drawerIcon: ({ color }) => (
                            <Entypo name='info-with-circle' size={24} color={color} />
                        )
                    }}

                />
                <Drawer.Screen
                    name='tabs'
                    options={{
                        drawerLabel: "Settings",
                        title: "Tab Screen",
                        drawerIcon: ({ color }) => (
                            <AntDesign name='setting
' size={24} color={color} />
                        )
                    }}

                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default Layout