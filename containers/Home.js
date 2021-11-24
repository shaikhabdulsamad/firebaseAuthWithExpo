import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth, signOut } from '../firebase'

export default function Home({navigation}) {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
          }).catch((error) => {
            // An error happened.
          });
          
    }

  return (
    <View style={styles.container}>
        <Text>{auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
        >

      <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  button:{
    backgroundColor: 'blue',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    alignItems:'center'
},
buttonText:{
color:'white',
fontSize: 16,
fontWeight:700
},
});
