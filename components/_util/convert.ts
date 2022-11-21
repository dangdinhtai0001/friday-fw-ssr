const convert2Px = (value, { refValue }): number => {
    // convert về string để dùng regex match được numericVal và unitVal
    const _value = value.toString();

    // Lấy giá trị numeric
    let numericStr = _value.match(/\d+/); // get the numericStr component
    if (numericStr === null) {
        // if match returns null, throw error...  use === so 0 values are accepted
        throw new Error('Invalid property value returned');
    }
    numericStr = numericStr[0]; // get the string
    // parse numericStr to number
    let numericVal = parseFloat(numericStr);

    // lấy giá trị unit
    let unit = _value.match(/\D+$/); // get the existing unit
    unit = unit == null ? 'px' : unit[0]; // if its not set, assume px - otherwise grab string

    // holds ratios
    const factors = {
        cm: 37.8,
        mm: 378,
        q: 1512,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1
    };

    // Danh sách các unit có giá trị phụ thuộc vào refVal
    // const relativeUnits = ['%', 'vw', 'vh'];

    let result : number;
    try {
        // Nếu các đơn vị dạng hằng số thì trả về kết quả luôn
        if (factors[unit]) {
            result = numericVal * factors[unit];
        } else {
            // Nếu là các giá trị phụ thuộc (%, vh, vw)
            result = (refValue / 100) * numericVal;
        }
    } catch (e) {
        console.error(e);
        return NaN;
    }

    return result;
};

export { convert2Px };