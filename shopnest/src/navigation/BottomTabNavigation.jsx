import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons"
import { Theme } from '@react-navigation/native'
import Home from '../screens/Home';
import search from '../screens/Search';
import cart from '../screens/Cart';
import profile from '../screens/Profile';
import { COLORS } from '../../assets/constants/theme'


const Tab = createBottomTabNavigator();

const ScreenOptions = {
    tabBarShowaLabel : false,
    tabBarHideOnKeyboard : true,
    headerShown : false,
    height : 75
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
        <Tab.Screen 
        name='Home' 
        component={Home}
        options = {{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused? 'home':'home-outline'} 
                        size={24}
                        color= {COLORS.primary}
                        />
            }
        }}
        />
        <Tab.Screen 
        name='search' 
        component={search}
        options = {{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused? 'search-sharp':'search-outline'}
                 size={24}
                 color= {COLORS.primary}
                 />
            }
        }}
        />
        <Tab.Screen 
        name='cart' 
        component={cart}
        options = {{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused? 'cart':'cart-outline'} 
                size={24}
                color= {COLORS.primary}
                />
            }
        }}
        />
        <Tab.Screen 
        name='profile' 
        component={profile}
        options = {{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused? 'person':'person-outline'} 
                size={24}
                color= {COLORS.primary}
                />
            }
        }}
        />
        
    </Tab.Navigator>
  )
}

export default BottomTabNavigation