import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export  function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function signup(email, password) {
        return new Promise((resolve, reject) => {
          auth.createUserWithEmailAndPassword(email, password)
            .then((userCreds) => resolve(userCreds))
            .catch((reason) => reject(reason));
        });
    }

    async function login(email, password) {
        return new Promise((resolve, reject) => {
          auth.signInWithEmailAndPassword(email, password)
            .then((userCreds) => resolve(userCreds))
            .catch((reason) => reject(reason));
        });
    }

    async function resetPassword(email) {
        return new Promise((resolve, reject) => {
          auth.sendPasswordResetEmail(email)
            .then((userCreds) => resolve(userCreds))
            .catch((reason) => reject(reason));
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)      
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
