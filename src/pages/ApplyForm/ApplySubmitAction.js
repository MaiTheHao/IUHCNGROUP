import { db } from '../../firebaseConfig';
import { setDoc, doc } from "firebase/firestore"; 
import { auth } from '../../firebaseConfig';
import Swal from 'sweetalert2';

const handleSubmitApplyFormAction = async (formData) => {
    const currentUser = auth.currentUser; // Get the current user
    if (!currentUser) {
        Swal.fire('Lỗi', 'Không có người dùng nào đang đăng nhập', 'error');
        return;
    }

    const UID = currentUser.uid;
    const applyRequestData = {
        form: {
            name: formData.name,
            age: formData.age,
            class: formData.class,
            favoriteLanguage: formData.favoriteLanguage,
            skillLevel: formData.skillLevel,
            reason: formData.reason,
        },
        result: {
            accept: null,
            refuse: null,
        },
        upTime: new Date().toISOString(),
    };

    try {
        await setDoc(doc(db, 'apply-requests', UID), applyRequestData);
        Swal.fire('Thành công', 'Yêu cầu đăng ký đã được gửi thành công', 'success');
    } catch (error) {
        Swal.fire('Lỗi', 'Lỗi khi gửi yêu cầu đăng ký: ' + error.message, 'error');
    }
};

export default handleSubmitApplyFormAction;
