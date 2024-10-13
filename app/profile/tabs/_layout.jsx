import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import FirstTab from './ProfileFirstTab';
import SecondTab from './ProfileSecondTab';
const ProfileTabsLayout = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const routes = [
        { key: 'first', title: "Profile First Tab", icon: "home" },
        { key: 'second', title: "Profile Second Tab", icon: "info-with-circle" },

    ];
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                first: FirstTab,
                second: SecondTab
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition="top"
            renderTabBar={props => (
                <TabBar
                    {...props}
                    renderIcon={({ route }) => (
                        <Entypo
                            name={route.icon}
                            size={24}
                            color={index === routes.findIndex(r => r.key === route.key) ? 'green' : 'gray'}
                        />
                    )}
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
export default ProfileTabsLayout;