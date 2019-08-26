import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
}

firebase.initializeApp(config)

export const { auth } = firebase // Authentication con Firebase
export const provider = new firebase.auth.FacebookAuthProvider()
export const storage = firebase.storage() // Almacenamiento en Firebase
export const database = firebase.database() // BD en FIrebase