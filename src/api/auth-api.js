import firebase from '@react-native-firebase/app'

import auth from '@react-native-firebase/auth';

export const logoutUser = () => {
    firebase.auth().signOut()
}

export const signUpUser = async ({ name, email, password }) => {
    try {
        const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
        firebase.auth().currentUser.updateProfile({
            displayName: name,
        })
        return { user }
    } catch (error) {
        return {
            error: error.message,
        }
    }
}

export const loginUser = async ({ email, password }) => {
    try {
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            // .catch((err)=> console.log(err))
        return { user }
    } catch (error) {
        return {
            error: error.message,
        }
    }
}

export const sendEmailWithPassword = async (email) => {
    try {
        await firebase.auth().sendPasswordResetEmail(email)
        return {}
    } catch (error) {
        return {
            error: error.message,
        }
    }
}