Là các thành phần giao diện người dùng để tổ chức và điều hướng giữa các nhóm nội dung có liên quan.
Giúp dễ dàng chuyển đổi giữa các view khác nhau.

## Giới thiệu

Các tab được triển khai bằng cách sử dụng các components:
- `Tab`: Chính laf phần tử tab. Nhấp vào một tab sẽ hiển thị panel tương ứng.
- `TabsList`: vùng chứa chứa các tab.
- `TabPanel`: thẻ lưu trữ nội dung được liên kết với một tab.
- `Tabs`: Thành phần bọc `TabsList` và `TabPanel` để các tab và panel của chúng có thể giao tiếp với nhau.
- `TabItem`: Thành phần dùng để cấu hình thông tin cho `Tab`, `TabsList`, `TabPanel`
- `TabsWrapper`: Thành phần bọc `Tabs`, để có thể sử dụng được `TabContext`

Để tiện cho việc tạo component `Tabbed dialog` (Dialog có content là Tab) thì sẽ wrap lại thành
- `Tabs`: Thành phần bọc `TabsList` và `TabPanel` để các tab và panel của chúng có thể giao tiếp với nhau.
- `TabHeaders`: Thành phần bọc `TabsList` và `Tab`
- `TabPanelWrapper`: Thành phần bọc `TabPanel` 