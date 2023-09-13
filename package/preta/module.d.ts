//
/**
 * file này tạo ra để xử lý lỗi:
 *
 * ---
 * Could not find a declaration file for module 'react-json-prettify'. '/home/dinhtai/workspace/friday-source/friday-v3.0.2/node_modules/react-json-prettify/dist/index.js' implicitly has an 'any' type.
 * Try `npm i --save-dev @types/react-json-prettify` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-json-prettify';`ts(7016)
 * ---
 *
 * Lỗi bạn nhận được cho biết rằng module 'react-json-prettify' không có tệp khai báo (declaration file), dẫn đến việc tệp '/home/dinhtai/workspace/friday-source/friday-v3.0.2/node_modules/react-json-prettify/dist/index.js' được giả định là có kiểu 'any' một cách ngầm định.
 *
 * Thông thường lệnh cài đặt sẽ không hoạt động nên là ta sẽ chuyển sang phương án khác
 *
 * tự tạo một tệp khai báo (declaration file). Trong dự án của bạn, tạo một tệp mới với phần mở rộng .d.ts, ví dụ: react-json-prettify.d.ts.
 * Trong tệp khai báo, thêm dòng sau: declare module 'react-json-prettify';
 *
 */
declare module 'react-json-prettify';
declare module 'react-json-viewer';
