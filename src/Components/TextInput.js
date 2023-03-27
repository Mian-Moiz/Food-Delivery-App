import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
// import { TextInput as Input } from 'react-native-paper'
import Colors from '../Colors/Colors'
import Constants from '../Constants/Constants'
import { theme } from '../core/theme'

export default function Input({ errorText, description, ...props }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder=""
               
                {...props}
            />
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    inputStyle: {
        color: 'black',
        padding: 12,
        paddingLeft:20,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: Colors.white,
        // marginTop: 10,
        fontSize: 15,
        fontFamily:Constants.fontfamilyMdium
    },
    description: {
        fontSize: 13,
        color: theme.colors.secondary,
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 8,
    },
})