import Swal from 'sweetalert2';

function validateFormData(formData) {
    const { name, age, class: className, favoriteLanguage, skillLevel, reason } = formData;

    if (!name) {
        Swal.fire('Lỗi', 'Vui lòng nhập tên của bạn.', 'error');
        return false;
    }

    if (!age || isNaN(age) || age <= 0) {
        Swal.fire('Lỗi', 'Vui lòng nhập tuổi hợp lệ.', 'error');
        return false;
    }

    if (!className) {
        Swal.fire('Lỗi', 'Vui lòng nhập lớp của bạn.', 'error');
        return false;
    }

    if (!favoriteLanguage) {
        Swal.fire('Lỗi', 'Vui lòng chọn ngôn ngữ lập trình yêu thích.', 'error');
        return false;
    }

    if (!skillLevel) {
        Swal.fire('Lỗi', 'Vui lòng chọn trình độ của bạn.', 'error');
        return false;
    }

    if (!reason) {
        Swal.fire('Lỗi', 'Vui lòng nhập lý do bạn chọn Group này.', 'error');
        return false;
    }

    return true;
}

export default validateFormData;