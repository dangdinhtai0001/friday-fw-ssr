Cách sử dụng

Ví dụ có 1 component như sau muốn dùng resize

```
<div>
    <div className="flex flex-col w-full h-full">
    </div>
</div>
```

Cách làm sẽ như sau:

```tsx
<div className = 'relative'>
    <div className="flex flex-col w-full h-full">
    </div>
     {/* ------------------ | resizable container | ------------------ */}
    <Resizable 
        onResizeStart={(event, info, direction) => {  }} 
        onResizeEnd={(event, info, direction) => {  }} 
        onResize={(event, info, direction) => {}} 
    />
</div>
```

Lưu ý: thằng class cha sẽ cần phải để `relative` nếu không sẽ có lỗi lúc init