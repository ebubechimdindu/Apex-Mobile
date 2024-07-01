import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONT } from '../../assets/Theme/theme'
import CustomFAB from '../../ui/common/CustomFAB'
import { Ionicons } from '@expo/vector-icons';
//import { Image } from 'expo-image';


const { height, width } = Dimensions.get('window');

function DebitCardComponent() {

  return (
  <View style={styles.debitCardContainer}>
    <Image source={require('./../../assets/icon.png')} style={styles.backgroundImage} />
    <View style={styles.cardHeader}>
      <Ionicons name="wifi" color={COLORS.text} size={26} />
      <Image source={require('./../../assets/images/firstBank.png')}
        resizeMode='cover'
        style={styles.iconImage} />
    </View>

    <View style={styles.cardbody}>
      <Text style={styles.cardTitle}>Account Number</Text>
      <Text style={styles.cardNumber}>0678024567</Text>
    </View>

    <View style={styles.cardFooter}>
      <View>
        <Text style={styles.cardFooterText}>Balance:</Text>
        <Text style={styles.cardFooterText}>&#8358; 60,0000</Text>
      </View>
      <View>
        <Text style={styles.cardFooterText}>10/26</Text>
      </View>
    </View>
  </View>
  )
}

const cardScreen = () => {
  const createCardLink = '../(stack)/card'
  
  return (
    <View style={styles.container}>
      <DebitCardComponent/>
      <CustomFAB link={createCardLink} />
    </View>
  );
};

export default cardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  debitCardContainer: {
    width: '90%',
    height: height * 0.30,
    backgroundColor: '#35979B',
    borderRadius: 30,
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 20,
    position: 'relative',
  },
  backgroundImage: {
    width: width * 0.35,
    height: height * 0.15,
    maxHeight: 165,
    maxWidth: 132,
    position: 'absolute',
    opacity: 0.15, // 10% transparency
    alignSelf: 'center',
    top: height * 0.08,
    bottom: height * 0.08,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
    zIndex: 1, // Ensure the text container is above the background image
  },
  iconImage: {
    height: 30,
    width: 30,
  },
  debitCardText: {
    color: 'white',
    fontWeight: 'semibold',
    fontSize: 20,
  },
  cardbody: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'regular',
  },
  cardNumber: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardFooter: {
    width: '100%', // Match the parent container width
    height: 65,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    opacity: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#48ABAF',
    paddingVertical: 10,
    paddingHorizontal: 20, // Use paddingHorizontal instead of padding to avoid overflow
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cardFooterText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'regular',
  }
});
