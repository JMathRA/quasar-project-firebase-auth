import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LocalStorage } from "quasar";

const firebaseConfig = {
  apiKey: "AIzaSyBrhkb0LpqgjZbJWIeZTlHJGx3U7v7ciEU",
  authDomain: "quasar-login-form.firebaseapp.com",
  projectId: "quasar-login-form",
  storageBucket: "quasar-login-form.appspot.com",
  messagingSenderId: "49637947136",
  appId: "1:49637947136:web:203bc86556ea4931e065e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set("user", user);
  } else {
    LocalStorage.remove("user");
  }
});
