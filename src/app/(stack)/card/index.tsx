import React from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS } from '../../../assets/Theme/theme';

// Define validation schema using Yup
const DebitCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .min(16, 'Card number must be exactly 16 digits')
    .max(16, 'Card number must be exactly 16 digits')
    .required('Card number is required'),
  expirationDate: Yup.string()
    .matches(/(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Expiration date is not valid (MM/YY)')
    .required('Expiration date is required'),
  cvv: Yup.string()
    .min(3, 'CVV must be exactly 3 digits')
    .max(3, 'CVV must be exactly 3 digits')
    .required('CVV is required'),
  cardholderName: Yup.string()
    .required('Cardholder name is required'),
});

export default function DebitCardForm() {
  return (
    <Formik
      initialValues={{ cardNumber: '', expirationDate: '', cvv: '', cardholderName: '' }}
      validationSchema={DebitCardSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            onChangeText={handleChange('cardNumber')}
            placeholderTextColor={COLORS.text}
            onBlur={handleBlur('cardNumber')}
            value={values.cardNumber}
            keyboardType="numeric"
            maxLength={16}
          />
          {errors.cardNumber && touched.cardNumber && (
            <Text style={styles.errorText}>{errors.cardNumber}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Cardholder Name"
            placeholderTextColor={COLORS.text}
            onChangeText={handleChange('cardholderName')}
            onBlur={handleBlur('cardholderName')}
            value={values.cardholderName}
          />

          {errors.cardholderName && touched.cardholderName && (
            <Text style={styles.errorText}>{errors.cardholderName}</Text>
          )}


          <TextInput
            style={styles.input}
            placeholder="Expiration Date (MM/YY)"
            placeholderTextColor={COLORS.text}
            onChangeText={handleChange('expirationDate')}
            onBlur={handleBlur('expirationDate')}
            value={values.expirationDate}
            maxLength={5}
          />
          {errors.expirationDate && touched.expirationDate && (
            <Text style={styles.errorText}>{errors.expirationDate}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="CVV"
            placeholderTextColor={COLORS.text}
            onChangeText={handleChange('cvv')}
            onBlur={handleBlur('cvv')}
            value={values.cvv}
            keyboardType="numeric"
            secureTextEntry
            maxLength={3}
          />
          {errors.cvv && touched.cvv && (
            <Text style={styles.errorText}>{errors.cvv}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: COLORS.text,
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: COLORS.text,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
