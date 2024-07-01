import { Dimensions, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View, Platform } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from './../../assets/Theme/theme'
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')

const login = () => {
  const [focusInput,setFocusedInput] = useState<String>('')
  function navigate() {
    // Your navigation logic
    router.replace({
      pathname: '../(tabs)',
    });
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
            <Text style={styles.headerText}>Login</Text>
            <Image
              source={require('./../../assets/icon.png')}
              resizeMode="contain"
              style={styles.headerImage}
            />
          </View>
          <View style={styles.bodyContainer}>
            <Ionicons name={"person-outline"} style={{ marginBottom: 40}} color={COLORS.text} size={70} />
            <TextInput style={[styles.input,focusInput === 'full name' && { borderColor: COLORS.primary }]}
              placeholder='Full Name'
              cursorColor={COLORS.text}
              placeholderTextColor="#888"
              onFocus={()=>setFocusedInput('full name')}
              onBlur={() => setFocusedInput('')}
            />

            <TextInput style={[styles.input,focusInput === 'password' && { borderColor: COLORS.primary }]}
              placeholder='Password'
              cursorColor={COLORS.text}
              placeholderTextColor="#888"
              maxLength={255}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry
              underlineColorAndroid="transparent"
              onFocus={()=>setFocusedInput('password')}
            />

            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={false ? '#3e3e3e' : '#f4f3f4'}
                value={true}
              />
              <Text style={{ color: COLORS.text }}>Save my Info?</Text>
            </View>

            <Pressable style={styles.buttonContainer} onPress={navigate}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>By confirming you agree to all terms</Text>
            <View style={styles.footerContainerRedirect}>
              <Text style={styles.footerRedirectText}>Don't have an account?</Text>
              <Link href={"./(signup)"} style={styles.footerRedirectButton}>Sign Up</Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

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
    fontWeight: 'bold'
  },
  headerImage: {
    height: height * 0.06,
    width: height * 0.06,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.03,
  },
  input: {
    marginTop: height * 0.03,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.text,
    borderRadius: 10,
    padding: width * 0.025,
    color: COLORS.text,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    paddingVertical: height * 0.03,
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
  icon: {
    position: 'absolute',
    right: 10,
    top: 57,
    color: COLORS.text,
    fontSize: 20,
  },
  footerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.text,
    gap : width * 0.03,
    marginTop: height * 0.04,
  },
  footerContainerRedirect:{
    flexDirection:'row',
    gap : width * 0.05,
  },
  footerText:{
    color: COLORS.tertiary,
    fontSize: width * 0.03,
  },
  footerRedirectText:{
    color: COLORS.text,
    fontSize: width * 0.04,
  },
  footerRedirectButton:{
    color: COLORS.primary,
    fontWeight: 'light',
    fontSize: width * 0.04,
  }
})
