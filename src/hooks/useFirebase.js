import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeFirebase from '../Pages/Firebase/firebase.init';


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signinWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
            .finally(() => { setIsLoading(false) })
    }

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //send to the database

                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    alert(error.message)
                });
                const destination = location?.state?.from || "/";
                history.replace(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }

    const login = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            alert(error.message)
        })
            .finally(() => setIsLoading(false))
    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
        })
        setIsLoading(false)

        return () => unsubscribed;
    }, [])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        admin,
        signinWithGoogle,
        registerUser,
        login,
        logout
    }
}

export default useFirebase;