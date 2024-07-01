import { Animated, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../../assets/Theme/theme';
import { router } from 'expo-router';

const CustomFAB = (props:any) => {
    //initialize animated using useRef
    const animation = useRef(new Animated.Value(0)).current;
    const [open, setOpen] = useState(false)

    

    //Function to toggle Menu open/close
    const toggleMenu = () => {
        const toValue = open ? 0 : 1;
        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start();
        setOpen(!open);

        router.navigate({
            pathname: props.link
        })
    }

    //Rotation animation for the main button
    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                })
            }
        ]
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleMenu}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <AntDesign name="plus" size={24} color='#FFF' />
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomFAB

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 65,
        right: 0,


    },
    button: {
        position: 'absolute',
        bottom: 36,
        right: 36,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 10,
        }
    },
    menu: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.primary,
    }
})