import { Dimensions, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import React, { useRef, useState } from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../../assets/Theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown'
import CustomDropdown from '../../../ui/common/CustomDropdown';
const { width, height } = Dimensions.get('window');

const login = () => {
  const [focusInput, setFocusedInput] = useState<String>('');
  const [selectedGender, setSelectedGender] = useState<String>('male');

  const days = Array.from({ length: 31 }, (_, i) => ({ label: (i + 1).toString(), value: (i + 1).toString() }));
  const months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1940 + 1 }, (_, i) => ({ label: (1940 + i).toString(), value: (1940 + i).toString() }));

  console.log(days);
  console.log(months);
  console.log(years);


  const genders = [
    { title: 'male', value: 'Male' },
    { title: 'female', value: 'Female' },
    { title: 'issues', value: 'issues' },
  ]

  function navigate() {
    // Your navigation logic
    router.push({
      pathname:'auth/password',
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign Up</Text>
            <Image
              source={require('./../../../assets/images/apex-logo.png')}
              resizeMode="contain"
              style={styles.headerImage}
            />
          </View>
          <View style={styles.bodyContainer}>
            <Ionicons name={"person-outline"} style={{ marginBottom: 40 }} color={COLORS.text} size={70} />
            <TextInput
              style={[styles.input, focusInput === 'full name' && { borderColor: COLORS.primary }]}
              placeholder='Full Name'
              cursorColor={COLORS.text}
              placeholderTextColor="#888"
              onFocus={() => setFocusedInput('full name')}
              onBlur={() => setFocusedInput('')}
            />

            <TextInput
              style={[styles.input, focusInput === 'Email' && { borderColor: COLORS.primary }]}
              placeholder='Email'
              inputMode='email'
              cursorColor={COLORS.text}
              placeholderTextColor="#888"
              onFocus={() => setFocusedInput('Email')}
              onBlur={() => setFocusedInput('')}
            />

            <TextInput
              style={[styles.input, focusInput === 'password' && { borderColor: COLORS.primary }]}
              placeholder='Password'
              cursorColor={COLORS.text}
              placeholderTextColor="#888"
              maxLength={255}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry
              underlineColorAndroid="transparent"
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput('')}
            />

            <View style={styles.pickerContainer}>
              <CustomDropdown data={genders} placeholder={'gender'} />
            </View>

            <View style={styles.dobContainerStyle}>
              <Text style={styles.dobTextStyle}>Date of birth</Text>
              <View style={styles.dobContainerButtonStyle}>
                <View style={styles.dropdownContainerStyle}>
                  <CustomDropdown data={months} placeholder={'month'} />
                </View>
                <View style={styles.dropdownContainerStyle}>
                  <CustomDropdown data={days} placeholder={'day'} />
                </View>
                <View style={styles.dropdownContainerStyle}>
                  <CustomDropdown data={years} placeholder={'year'} />
                </View>
              </View>
            </View>

            <Pressable style={styles.buttonContainer} onPress={navigate}>
              <Text style={styles.buttonText}>Next</Text>
            </Pressable>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>By confirming you agree to all terms</Text>
            <View style={styles.footerContainerRedirect}>
              <Text style={styles.footerRedirectText}>Don't have an account?</Text>
              <Link href={"auth/login"} style={styles.footerRedirectButton}>Log in</Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.03,
  },
  headerText: {
    fontSize: width * 0.1,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  headerImage: {
    height: height * 0.06,
    width: height * 0.06,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.01,
  },
  input: {
    marginTop: height * 0.02,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.text,
    borderRadius: 10,
    padding: width * 0.025,
    color: COLORS.text,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 16,
    paddingVertical: height * 0.03,
  },
  buttonContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: width * 0.036,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.text,
    fontWeight: 'light',
    fontSize: width * 0.04,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.text,
    gap: width * 0.03,
    marginTop: height * 0.04,
  },
  footerContainerRedirect: {
    flexDirection: 'row',
    gap: width * 0.05,
  },
  footerText: {
    color: COLORS.tertiary,
    fontSize: width * 0.03,
  },
  footerRedirectText: {
    color: COLORS.text,
    fontSize: width * 0.04,
  },
  footerRedirectButton: {
    color: COLORS.primary,
    fontWeight: 'light',
    fontSize: width * 0.04,
  },
  pickerContainer: {
    marginVertical: height * 0.03,
    width: '100%',
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.text,
  },
  dobContainerStyle: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.text,
    paddingHorizontal: width * 0.025,
    paddingVertical: height * 0.01,
    maxHeight: 100,
    marginBottom:20,
  },
  dobContainerButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    borderColor: COLORS.text,
    color: COLORS.text,
  },
  dropdownContainerStyle: {
    width: '37%',
    height: height * 0.07,
  },
  dobTextStyle: {
    color: COLORS.text,
    fontWeight: 'light',
    fontSize: width * 0.04,
  }
});
