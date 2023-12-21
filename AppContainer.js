import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import AccountScreen from './src/Screens/Account';
import SearchScreen from './src/Screens/SearchScreen';
import HomePage from './src/Screens/Home';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';
import AddProductScreen from './src/Screens/AddProductScreen';
import { theme } from './src/Theam';
import { icons } from './src/Common';


const AppContainer = props => {
    const { ChangeLang } = props;

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const Dash = createStackNavigator();


    function AppStack() {
        return (
            <Tab.Navigator screenOptions={({ route, }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? icons['home'] : icons['homeunselect'];
                    } else if (route.name === 'Search') {
                        iconName = focused ? icons['search'] : icons['searchunselect'];
                    } else if (route.name === 'Account') {
                        iconName = focused ? icons['account'] : icons['accountunselect'];
                    }
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode='contain' />
                            <Text style={{ fontSize: 10, marginTop: 4, color: focused ? theme.colors.button_color : theme.colors.greyColor }}>{route.name}</Text>
                        </View>
                    )
                },
            })
            }
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />

            </Tab.Navigator>
        );
    }

    function HomeStack() {
        return (
            <Dash.Navigator
                screenOptions={{
                    headerShown: false,
                    headerMode: 'none',
                }}
                initialRouteName="HomePage">
                <Dash.Screen
                    name="Homen"
                    component={HomePage}
                />
                <Dash.Screen
                    name="ProductDetailsScreen"
                    component={ProductDetailsScreen}
                />
                <Dash.Screen
                    name="AddProductScreen"
                    component={AddProductScreen}
                />

            </Dash.Navigator>
        )
    }
    function SearchStack() {
        return (
            <Dash.Navigator
                screenOptions={{
                    headerShown: false,
                    headerMode: 'none',
                }}
                initialRouteName="SearchScreen">
                <Dash.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                />
                <Dash.Screen
                    name="ProductDetailsScreen"
                    component={ProductDetailsScreen}
                />

            </Dash.Navigator>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home">
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Home" component={AppStack} />
            <Stack.Screen name="SearchScreen" component={SearchStack} />
            <Stack.Screen name="AddProductScreen" component={AddProductScreen} />

        </Stack.Navigator>
    );
};



export default AppContainer;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#4CBB55',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '700',
    },
    imgStyle: {
        width: 150,
        height: 150,
    },
});

