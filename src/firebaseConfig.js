import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyASzSkgpjyLDppW_zkNW9XNnuVIQKtm6UI",
	projectId: "iuh-cn-apply-form",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
