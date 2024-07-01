import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextField = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleChangeText = (text:string) => {
        // Example error check
        if (text.length < 5) {
            setError(true);
        } else {
            setError(false);
        }
        console.log(text);
    };

    return (
        <View>
            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.inputFocused,
                    error && styles.inputError,
                ]}
                placeholder="Enter your text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}
            />
            {error && <Text style={styles.errorText}>Input must be at least 5 characters long.</Text>}
        </View>
    );
};

export default TextField;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#60DBE0',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    inputFocused: {
        backgroundColor: '#f0f0f0',
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginLeft: 12,
    },
});
