Tóm tắt state:

1. `authState`: Quản lý trạng thái xác thực.

    - `isAuth`: Boolean cho biết người dùng đã xác thực hay chưa.
    - `isLogged`: Boolean cho biết người dùng đã đăng nhập hay chưa.
    - `user`: Đối tượng chứa thông tin người dùng.

2. `pageStatus`: Quản lý trạng thái trang hiện tại.

    - `currentPage`: Chuỗi cho biết ID trang hiện tại.

3. `screenSize`: Quản lý kích thước màn hình.

    - `width`: Số đại diện cho chiều rộng của cửa sổ.
    - `height`: Số đại diện cho chiều cao của cửa sổ.

4. `setAuth`: Hàm cập nhật trạng thái xác thực.

    - `isAuth`: Boolean để cập nhật trạng thái xác thực.
    - `isLogged`: Boolean để cập nhật trạng thái đăng nhập.
    - `user`: Đối tượng để cập nhật thông tin người dùng.

5. `setScreenSize`: Hàm cập nhật kích thước màn hình.

    - `width`: Số để cập nhật chiều rộng của cửa sổ.
    - `height`: Số để cập nhật chiều cao của cửa sổ.

6. `setPageStatus`: Hàm cập nhật trạng thái trang hiện tại.

    - `currentPage`: Chuỗi để cập nhật trang hiện tại.

7. Các hook hiệu ứng:
    - `useEffect`: Lắng nghe sự thay đổi kích thước cửa sổ và cập nhật `screenSize`.
    - `useEffect`: Lấy trạng thái đăng nhập từ cookie và cập nhật `authState`.
