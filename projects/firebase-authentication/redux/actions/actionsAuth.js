import {AUTH_USER} from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const displayFirebaseError = (responseError) => {
    let customMsg;
    const errorMsg = responseError?.error?.message
    switch (errorMsg) {
        case 'EMAIL_NOT_FOUND':
            customMsg = "Cette adresse email n'existe pas";
            break;
        case 'INVALID_PASSWORD':
            customMsg = "Le mot de passe est incorrect";
            break;
        case 'USER_DISABLED':
            customMsg = "Ce compte a été désactivé";
            break;
        case 'EMAIL_EXISTS':
            customMsg = "Cette adresse email est déjà utilisée";
            break;
        case 'OPERATION_NOT_ALLOWED':
            customMsg = "L'opération n'est pas autorisée. Contactez le support";
            break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            customMsg = "Trop de tentatives échouées. Réessayez plus tard";
            break;
        case 'INVALID_EMAIL':
            customMsg = "L'adresse email n'est pas valide";
            break;
        case 'WEAK_PASSWORD':
            customMsg = "Le mot de passe est trop faible";
            break;
        default:
            customMsg = "Une erreur inattendue s'est produite. Veuillez réessayer";
            break;
    }
    return customMsg;
}
export const actionSignup = ({email, password}) => {
    return async (dispatch) => {
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCx6fDE2UJMmvEfXYS4FmatEdN9PR-7J0I", {
            body: JSON.stringify({email, password, returnSecureToken: true}),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            const responseError = await response.json()
            let customMsg = displayFirebaseError(responseError)
            throw new Error(customMsg)
        }
        const dataObj = await response.json()
        console.log(dataObj);
        dispatch(actionAuthUser(dataObj.localId, dataObj.idToken))

    }
}

export const actionLogin = ({email, password}) => {
    return async (dispatch) => {
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx6fDE2UJMmvEfXYS4FmatEdN9PR-7J0I", {
            body: JSON.stringify({email, password}),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            const responseError = await response.json()
            let customMsg = displayFirebaseError(responseError)
            throw new Error(customMsg)
        }
        const dataObj = await response.json()
        dispatch(actionAuthUser(dataObj.localId, dataObj.idToken))
        const expiresIn = parseInt("3600", 10);
        if (isNaN(expiresIn) || expiresIn <= 0) {
            throw new Error("La durée d'expiration est invalide");
        }

        const expiresInMillis = expiresIn * 1000;

        const currentTime = new Date().getTime();
        const expireDate = currentTime + expiresInMillis;

        if (expireDate > Number.MAX_SAFE_INTEGER || expireDate < 0) {
            throw new Error("La date d'expiration est hors limites");
        }

        const tokenExpireIn = new Date(expireDate).toISOString();
        await saveToAsyncStorage(dataObj.idToken, dataObj.localId, expiresIn, tokenExpireIn);
    }
}

const actionAuthUser = (userId, token) => {
    return {
        type: AUTH_USER,
        ...{userId, token}
    }
}

const saveToAsyncStorage = async (token, userId, dateTokenExpire) => {
    await AsyncStorage.setItem("userDetails", JSON.stringify({
        token,
        userId,
        dateTokenExpire,
    }))

}
