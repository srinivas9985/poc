// screens/AccountScreen.js

import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login, logout } from '../Redux/Actions';
import { theme } from '../Theam';
import { icons } from '../Common';

const AccountScreen = ({ loggedIn, user, dispatch }) => {
    const handleLogin = () => {
        // Add your login logic here
        console.log("hellll")
        dispatch(login());
    };

    const handleLogout = () => {
        // Add your logout logic here
        dispatch(logout());
    };

    return (
        <View style={styles.container}>
            {loggedIn ? (

                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <View style={styles.userInfoContainer}>
                        <Image source={icons['userIcon']} resizeMethod='contain' style={styles.profileImage} />

                        <View style={styles.textContainer}>
                            <Text style={styles.info}>Srinivas K</Text>
                            <Text style={styles.info}>9999999999</Text>
                            <Text style={styles.info}>Software</Text>
                        </View>

                    </View>
                    <Text style={{ marginLeft: 16, marginTop: 20, fontWeight: '700' }}>Address :</Text>
                    <Text style={{ marginLeft: 16 }}>Flat 105, Bhaganagar colony, Hyderabad</Text>
                    <View style={styles.logoutView}>
                        <TouchableOpacity onPress={handleLogout} style={styles.logInoutButton}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: theme.colors.whiteColor }}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.loginView}>
                    <TouchableOpacity onPress={handleLogin} style={styles.logInoutButton}>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: theme.colors.whiteColor }}>Log In</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const mapStateToProps = (state) => ({
    loggedIn: state.user.loggedIn,
    user: state.user.profile,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginTop: 10
        // justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        marginBottom: 10,
        fontSize: 14,
        fontWeight: '600'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        // borderWidth: 1,
        marginRight: 16,
        resizeMode: 'contain'

    },
    logInoutButton: {
        width: '70%',
        height: 40,
        backgroundColor: theme.colors.button_color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    loginView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoutView: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect(mapStateToProps)(AccountScreen);
