import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import FirstTab from './Chat';
import SecondTab from './Status';
import ThirdTab from './Call';
import FourthTab from './Camera';


const WhatsAppTabsLayout = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const routes = [
        { key: 'forth', title: "cam", icon: "info-with-circle" },
        { key: 'first', title: "Chat", icon: "home" },
        { key: 'second', title: "Status", icon: "info-with-circle" },
        { key: 'third', title: "Call", icon: "info-with-circle" },
        // { key: 'second', title: "Second Tab", icon: "info-with-circle" },

    ];
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                forth: FourthTab,
                first: FirstTab,
                second: SecondTab,
                third: ThirdTab,
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition="top"
            renderTabBar={props => (
                <TabBar
                    {...props}
                    // renderIcon={({ route }) => (
                    //     <Entypo
                    //         name={route.icon}
                    //         size={24}
                    //         color={index === routes.findIndex(r => r.key === route.key) ? 'green' : 'gray'}
                    //     />
                    // )}
                    indicatorStyle={{ backgroundColor: 'green' }}
                    style={{
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        borderTopColor: '#ccc',
                    }}
                    labelStyle={{ color: 'black', fontSize: 12 }}
                />
            )}
        />
    )

}
export default WhatsAppTabsLayout;