import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, FONT } from '../../assets/Theme/theme'

const OptionsHeaderButton = () => {
    const handleIconPress = () => {
        // Handle the icon press event here
        console.log('Icon pressed');
    };
    return (
        <TouchableOpacity >
            <Ionicons name="ellipsis-vertical" color={COLORS.text} size={FONT.medium} style={{ marginEnd: 20 }} />
        </TouchableOpacity>
    )
}

export default OptionsHeaderButton

const styles = StyleSheet.create({})