import app from "./firebaseApp";

import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export default auth;
