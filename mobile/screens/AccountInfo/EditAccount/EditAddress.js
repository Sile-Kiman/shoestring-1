import React from 'react';
import { View, Text, Modal, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

const EditAddress = props => {
    return(
      <Modal visible={props.visible} animationType="fade">
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={50}>
        <View style={styles.cancelButtonContainer}>
          <View style={styles.cancelButton}>
            <Button title="<" color="#3bd389" onPress={props.onCancel} />
          </View>
        </View>
        <Text style={styles.headerText}>Change Address</Text>
        <TextInput style={styles.input}
          id='sreetAddress'
          lable='sreetAddress (required)'
          placeholder='1234 Flufy Unicorn Ln.'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <TextInput style={styles.input}
          id='apartment'
          lable='apartment (required)'
          placeholder='Apartment #420'
          required
          autoCapitalize='none'
          // onValueChange = {() => ()}
          initialValue='' />
        <View style={styles.halfInputContainer}>
          <TextInput style={styles.halfInput}
            id='city'
            lable='city(required)'
            placeholder='Charlotte'
            required
            autoCapitalize='none'
            // onValueChange = {() => ()}
            initialValue='' />
          <TextInput style={styles.halfInput}
            id='zipcode'
            lable='Zip Code (required)'
            placeholder='28204'
            required
            autoCapitalize='none'
            // onValueChange = {() => ()}
            initialValue='' />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD NEW CREDIT CARD" color="#f5f5f5" onPress={props.onCancel} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 36,
    color: '#363636',
    justifyContent: 'flex-start',
    marginRight: 75,
    padding: 30,
  },
  halfInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  },
  halfInput: {
    width: '40%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  button: {
    width: '90%',
    borderRadius: 5,
    borderColor: '#3bd389',
    backgroundColor: '#3bd389',
    fontWeight: 'bold',
    padding: 5,
    margin: 13,
  },
  cancelButtonContainer: {
    paddingTop: 20,
    marginRight: 320,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  cancelButton: {
    width: '20%',
    borderRadius: 5,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    padding: 5,
    margin: 13,
    marginTop: 50,
  },

});

export default EditAddress;