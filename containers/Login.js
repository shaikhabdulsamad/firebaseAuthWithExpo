import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from '../firebase'

export default function Login({navigation}) {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
     console.log(user)
    })
    .catch((error) => {
      console.log(error)
    });
}
const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
     console.log(user)
     if (user) {
        navigation.navigate('Home')
       } 
    })
    .catch((error) => {
      console.log(error)
    });
}

// useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
//       });

//       return unsubscribe
// }, [])
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >

            <View>
                <Text style={styles.loginHeading}>Log In</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignIn}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonOutline}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    loginHeading: {
        // marginTop: 60,
        fontSize: 30,
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '80%',
        marginTop: 40,
    },
    input: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'blue',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems:'center'
    },
buttonText:{
    color:'white',
    fontSize: 16,
    fontWeight:700
},
    buttonOutline:{
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 2,
        marginTop:10,
        alignItems:'center'
    },
buttonOutlineText:{
    color:'blue',
    fontSize: 16,
    fontWeight:700
}

});