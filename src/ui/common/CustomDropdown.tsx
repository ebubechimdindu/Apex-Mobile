import { Dimensions, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import React, { useRef, useState } from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../assets/Theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown'

const { width, height } = Dimensions.get('window');
const CustomDropdown = (props:any) => {
    return (
            <SelectDropdown
                data={props.data}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem.value, index);
                }}
                renderButton={(selectedItem, isOpened) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>

                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem && selectedItem.value) || props.placeholder}
                            </Text>
                            <Ionicons
                                name={isOpened ? 'chevron-up' : 'chevron-down'}
                                size={20}
                                color={COLORS.text}
                                style={styles.dropdownButtonIconStyle}
                            />
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: COLORS.primary }) }}>
                            <Text style={styles.dropdownItemTxtStyle}>{item.value}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            >

            </SelectDropdown>
    )
}

export default CustomDropdown

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: width * 0.04,
        fontWeight: '500',
        color: COLORS.text,
    },

    dropdownButtonIconStyle: {
        fontSize: width * 0.06,
        marginRight: 5,
    },
    dropdownMenuStyle: {
        backgroundColor: COLORS.background,
        borderRadius: 8,
        marginBottom: 10
    },
    dropdownItemStyle: {
        width: '100%',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.text,
    },
})