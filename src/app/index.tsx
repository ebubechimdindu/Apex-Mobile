import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../assets/Theme/theme';
import { Link, router, useSegments } from 'expo-router';

const { width, height } = Dimensions.get('window');

const WelcomePage = () => {
  const segments = useSegments()
  console.log(segments)
  function navigation() {
    router.navigate({
      pathname: './auth/(signup)'
    })
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/apex-logo.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.logoText}>pex</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>All Your Finances Inside a Fancy App</Text>
        <TouchableOpacity style={styles.button} onPress={navigation}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
//Using percentages ensures that elements
//scale relative to their parent container or the screen size. 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%', // Add padding relative to screen width
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '30%', // Use percentage-based width
    aspectRatio: 1.43, //  This keeps the width-to-height ratio of the element
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: width * 0.2, // Adjust font size relative to screen width
    fontWeight: 'bold',
    color: COLORS.text,
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: height * 0.05, // Adjust top margin relative to screen height
    gap: 90,
  },
  text: {
    marginTop: height * 0.02, // Adjust top margin relative to screen height
    fontSize: FONT.xLarge,
    marginHorizontal: '8%',
    color: COLORS.text,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: height * 0.02, // Adjust padding relative to screen height
    borderRadius: 40,
    marginTop: height * 0.23, // Adjust top margin relative to screen height
    width: '80%', // Use percentage-based width

  },
  buttonText: {
    fontSize: height * 0.02,
    color: COLORS.text,
    textAlign: 'center',
  },
});
