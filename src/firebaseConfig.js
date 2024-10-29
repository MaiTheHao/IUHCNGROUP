import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyASzSkgpjyLDppW_zkNW9XNnuVIQKtm6UI",
	projectId: "iuh-cn-apply-form",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };