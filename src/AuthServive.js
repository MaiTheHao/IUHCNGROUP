import { auth } from "./firebaseConfig";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";

/**
 * Đăng ký người dùng mới với email, mật khẩu và tên người dùng.
 * @param {string} email - Email của người dùng.
 * @param {string} password - Mật khẩu của người dùng.
 * @param {string} username - Tên hiển thị của người dùng.
 * @returns {Promise<Object>} - Đối tượng thông tin người dùng.
 * @throws Sẽ ném ra lỗi nếu đăng ký thất bại.
 */
export const register = async (email, password, username) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(userCredential.user, { displayName: username });
    await signOut(auth);
		await sendEmailVerification(userCredential.user);
		return userCredential;
	} catch (error) {
		console.error("Lỗi trong quá trình đăng ký:", error);
		throw error;
	}
};

/**
 * Đăng nhập người dùng với email và mật khẩu.
 * @param {string} email - Email của người dùng.
 * @param {string} password - Mật khẩu của người dùng.
 * @returns {Promise<Object>} - Đối tượng thông tin người dùng.
 * @throws Sẽ ném ra lỗi nếu đăng nhập thất bại.
 */
export const login = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Email và mật khẩu không được để trống.");
    }
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (!userCredential.user.emailVerified) {
      throw new Error("Email chưa được xác minh. Vui lòng kiểm tra email của bạn.");
    }
    return userCredential;
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
      case "auth/user-not-found":
        throw new Error("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
      case "auth/invalid-email":
        throw new Error("Email không hợp lệ. Vui lòng kiểm tra lại.");
      case "auth/user-disabled":
        throw new Error("Tài khoản đã bị vô hiệu hóa.");
      case "auth/invalid-credential":
        throw new Error("Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra lại.");
      case "auth/email-already-in-use":
        throw new Error("Email đã được sử dụng. Vui lòng sử dụng email khác.");
      default:
        throw error;
    }
  }
};

/**
 * Đăng xuất người dùng hiện tại.
 * @returns {Promise<void>}
 * @throws Sẽ ném ra lỗi nếu đăng xuất thất bại.
 */
export const logout = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.error("Lỗi trong quá trình đăng xuất:", error);
		throw error;
	}
};
