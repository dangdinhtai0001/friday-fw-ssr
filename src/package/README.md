Bốn thiên sứ mạnh nhất là 4 tổng lãnh thiên sứ, bao gồm:
- Michael, vị tổng lãnh thiên sứ đứng đầu, là thủ lĩnh của các thiên thần và là người bảo vệ loài người. Ông được miêu tả là một chiến binh mạnh mẽ, thường được cầm kiếm hoặc cây quyền trượng.
- Gabriel, là thiên sứ báo tin, thường được giao nhiệm vụ truyền đạt những thông điệp quan trọng của Thiên Chúa. Ông được miêu tả là một thiên sứ xinh đẹp, thường được cầm cuộn giấy hoặc vương trượng.
- Raphael, là thiên sứ chữa lành, thường được giao nhiệm vụ giúp đỡ những người đau khổ và chữa lành bệnh tật. Ông được miêu tả là một thiên sứ nhân hậu, thường được cầm cây gậy hoặc bình thuốc.
- Uriel, là thiên sứ ánh sáng, thường được giao nhiệm vụ soi sáng tâm trí và dẫn dắt con người đến con đường đúng đắn. Ông được miêu tả là một thiên sứ thông thái, thường được cầm ngọn lửa hoặc thanh gươm.


Ngoài 4 tổng lãnh thiên sứ, còn có rất nhiều thiên sứ khác được nhắc đến trong Kinh Thánh và các văn bản tôn giáo khác. Dưới đây là một số tên thiên sứ khác:

- Cherubim là các thiên sứ được mô tả là có 6 cánh, đôi cánh che mặt, đôi cánh che hai chân, và đôi cánh còn lại dùng để bay. Họ được giao nhiệm vụ bảo vệ ngai vàng của Thiên Chúa.
- Seraphim là các thiên sứ được mô tả là có 3 đôi cánh, đôi cánh che mặt, đôi cánh che chân, và đôi cánh còn lại dùng để bay. Họ được mô tả là luôn ca ngợi Thiên Chúa.
- Thrones là các thiên sứ được giao nhiệm vụ cai quản thế giới.
- Dominions là các thiên sứ được giao nhiệm vụ ban quyền lực cho các thiên thần khác.
- Virtues là các thiên sứ được giao nhiệm vụ giúp đỡ con người trong những lúc khó khăn.
- Powers là các thiên sứ được giao nhiệm vụ chiến đấu chống lại thế lực của bóng tối.
- Principalities là các thiên sứ được giao nhiệm vụ cai quản các quốc gia và các vùng lãnh thổ.
- Archangels là các thiên sứ cấp cao, có nhiệm vụ truyền đạt thông điệp của Thiên Chúa cho con người.

---
- Michael: Chứa các file cấu hình và config 
- Gabriel: Chứa các ATOMIC Pages
- Uriel: Chứa các ATOMIC Atoms, Molecules, Organisms, Templates
- Raphael: Các hook dùng chung, utils, types ...

Trong Atomic Design: giao diện được chia thành 5 phần:

- Atoms: 
  - Là thành phần nhỏ nhất, những block cơ bản nhất và không thể nhỏ hơn nữa (ví dụ: buttons, input fields, checkboxes, links). Chúng cũng có thể trừ tượng như colours, fonts chữ.
- Molecules:
  -  Gồm các atom kết hợp vs nhau là các phần tử bên ngoài như đơn vị (ví dụ: một input field và một button có thể kết hợp thành một khung tìm kiếm)
  -  Molecules có thể đơn giản hoặc phức tạp, được xây dựng để tái sử dụng hoặc chỉ dụng một lần. ví dụ hình ảnh sau: Thì molecules gồm ảnh và text, progess-bar, box-ảnh
- Organisms:
  - Nhóm các Molecules giống nhau hoặc khác nhau để tạo thành một thành phần hoàn chỉnh của một giao diện. (Ví dụ: Header trang có thể kết hợp từ một logo, menu và khung tìm kiếm)
- Templates:
  - là kết hợp các organisms với nhau tạo thành các trang.
- Pages:
  - là các mẫu cụ thể. Họ sẽ kiểm tra templates làm việc với nội dung thực tế như thế nào, cho phép các designers quay trở lại để chỉnh sửa các molecules, organisms, và các templates khi cần thiết.