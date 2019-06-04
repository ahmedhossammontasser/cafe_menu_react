import Firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_DEV_API_URL,
    authDomain: process.env.REACT_APP_DEV_AuthDomain,
    databaseURL: process.env.REACT_APP_DEV_DatabaseURL,
    projectId: process.env.REACT_APP_DEV_ProjectId,
    storageBucket: process.env.REACT_APP_DEV_StorageBucket,
    messagingSenderId: process.env.REACT_APP_DEV_MessagingSenderId,
    appId: process.env.REACT_APP_DEV_AppId
};
Firebase.initializeApp(config);
export default Firebase;