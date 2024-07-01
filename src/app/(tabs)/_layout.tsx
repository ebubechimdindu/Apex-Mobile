import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../ui/navigation/TabBar'
import { COLORS, FONT } from '../../assets/Theme/theme'
import OptionsHeaderButton from '../../ui/navigation/OptionsHeaderButton'

const TabLayout = () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
            sceneContainerStyle={{backgroundColor:COLORS.background}}
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.background || '#100F0F',
                    borderBottomWidth: 1,
                    borderColor: '#100F0F',
                    shadowColor: COLORS.background,
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 80,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <OptionsHeaderButton />
                ),

                tabBarActiveTintColor: '#fff', // Set the active tab label color
                tabBarInactiveTintColor: '#aaa', // Set the inactive tab label color
            }}


        >
            <Tabs.Screen name="index" options={{
                title: 'Home'
            }} />
            <Tabs.Screen name='wallet' options={{
                title: 'My Cards',
                headerTitle: 'My Cards'
            }} />
            <Tabs.Screen name='terminal' options={{
                title: 'Terminal'
            }} />
            <Tabs.Screen name='profile' options={{
                title: 'Profile ',
                headerShown: false
            }} />
        </Tabs>
    )
}

export default TabLayout

