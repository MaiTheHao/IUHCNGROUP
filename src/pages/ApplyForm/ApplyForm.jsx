import React, { useState } from 'react';
import Input from '../../components/Input';
import './ApplyForm.scss';
import { faCalendarDays, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCode, faPeopleLine, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import validateFormData from './ApplyFormValidate';
import Swal from 'sweetalert2';

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        class: '',
        favoriteLanguage: '',
        skillLevel: '',
        reason: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFormData(formData)) {
            Swal.fire('Thành công', 'Gửi yêu cầu thành công. Yêu cầu của bạn sẽ được các Admin duyệt.', 'success');
        }
    };

    return (
        <div className="apply-form">
            <h2>APPLY FORM</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nhập tên của bạn . . ."
                    value={formData.name}
                    onChange={handleInputChange}
                    icon={faUser}
                />
                <Input
                    type="number"
                    name="age"
                    placeholder="Nhập tuổi của bạn . . ."
                    value={formData.age}
                    onChange={handleInputChange}
                    icon={faCalendarDays}
                />
                <Input
                    type="text"
                    name="class"
                    placeholder="Nhập lớp của bạn . . ."
                    value={formData.class}
                    onChange={handleInputChange}
                    icon={faPeopleLine}
                />
                <div className="apply-form-choices">
                    <label>
                        <FontAwesomeIcon icon={faCode} />
                        Ngôn ngữ lập trình yêu thích:
                    </label>
                    <select
                        name="favoriteLanguage"
                        value={formData.favoriteLanguage}
                        onChange={handleInputChange}
                    >
                        <option value="">Chọn ngôn ngữ</option>
                        <option value="C++">C++</option>
                        <option value="Python">Python</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Java">Java</option>
                        <option value="Other">Khác</option>
                    </select>
                </div>
                <div className="apply-form-choices">
                    <label>
                        <FontAwesomeIcon icon={faRankingStar} />
                        Trình độ của bạn:
                    </label>
                    <select
                        name="skillLevel"
                        value={formData.skillLevel}
                        onChange={handleInputChange}
                    >
                        <option value="">Chọn trình độ</option>
                        <option value="Newbie">Newbie</option>
                        <option value="Intermediate">Hiểu biết</option>
                        <option value="Professional">Chuyên nghiệp</option>
                        <option value="Master">Master</option>
                    </select>
                </div>
                <textarea
                    name="reason"
                    placeholder="Tại sao bạn lại chọn Group này?"
                    value={formData.reason}
                    onChange={handleInputChange}
                />
                <button type="submit">Gửi yêu cầu</button>
            </form>
        </div>
    );
};

export default ApplyForm;