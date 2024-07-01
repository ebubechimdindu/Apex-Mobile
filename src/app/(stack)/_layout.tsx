import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { COLORS } from '../../assets/Theme/theme';
import { Provider as PaperProvider } from 'react-native-paper';
const MainStackLayout = () => {
    return (

            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: COLORS?.background || '#100F0F',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 16,
                    },
                    headerTitleAlign: 'center',
                    contentStyle: styles.contentStyle
                }}
            >
                <Stack.Screen
                    name="card/index"
                    options={{
                        headerTitle: 'Add Payment Card',
                        headerStyle: {
                            backgroundColor: 'black',
                        },
                    }}
                />
            </Stack>
    );
};

const styles = StyleSheet.create({
    contentStyle: {
        backgroundColor: COLORS.background,
    },
});
export default MainStackLayout;
