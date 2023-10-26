import _ from 'lodash';
import { StyleFunctionProps } from '@chakra-ui/react';

/**
 * Điều chỉnh độ sáng hoặc tối của một mã màu hex hoặc rgba.
 *
 * @param {string} color - Mã màu đầu vào, có thể là mã màu hex hoặc rgba.
 * @param {number} factor - Hệ số điều chỉnh độ sáng hoặc tối.
 *   - Nếu "factor" là số dương (ví dụ: 0.5), nó tăng độ sáng của màu.
 *     Ví dụ: Màu đỏ RGB(255, 0, 0) với "factor" là 0.5 sẽ trở nên sáng hơn một nửa thành RGB(255, 128, 128).
 *   - Nếu "factor" là số âm (ví dụ: -0.5), nó giảm độ sáng của màu.
 *     Ví dụ: Màu đỏ RGB(255, 0, 0) với "factor" là -0.5 sẽ trở nên tối đi một nửa thành RGB(128, 0, 0).
 * @returns {string} - Mã màu mới sau khi điều chỉnh độ sáng hoặc tối, ở định dạng hex hoặc rgba.
 */

export function adjustBrightness(color: string, factor: number): string {
    // Kiểm tra xem mã màu là hex hoặc rgba
    const isHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    const isRgba = /^rgba/.test(color);

    if (isHex) {
        // Chuyển đổi mã màu hex sang định dạng RGB
        let [r, g, b] = hexToRgbArray(color);

        // Điều chỉnh độ sáng hoặc tối
        r = Math.min(255, Math.max(0, r + (factor * 255)));
        g = Math.min(255, Math.max(0, g + (factor * 255)));
        b = Math.min(255, Math.max(0, b + (factor * 255)));

        // Chuyển đổi trở lại mã màu hex
        const adjustedHex = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
        return adjustedHex;
    } else if (isRgba) {
        // Chuyển đổi rgba sang mảng các giá trị rgba
        const rgbaArray = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(',');
        const r = parseInt(rgbaArray[0].trim(), 10);
        const g = parseInt(rgbaArray[1].trim(), 10);
        const b = parseInt(rgbaArray[2].trim(), 10);
        const a = parseFloat(rgbaArray[3].trim());

        // Điều chỉnh độ sáng hoặc tối
        const adjustedR = Math.min(255, Math.max(0, r + (factor * 255)));
        const adjustedG = Math.min(255, Math.max(0, g + (factor * 255)));
        const adjustedB = Math.min(255, Math.max(0, b + (factor * 255)));

        return `rgba(${adjustedR}, ${adjustedG}, ${adjustedB}, ${a})`;
    } else {
        // Trả về màu gốc nếu không phải hex hoặc rgba
        return color;
    }
}

/**
 * ==================================================================================================================================
 */

/**
 * Trích xuất mã màu từ chủ đề Chakra UI dựa trên các thuộc tính như màu và chế độ sáng/tối.
 *
 * @param {StyleFunctionProps} props - Đối tượng chứa các thuộc tính cần thiết để xác định mã màu.
 * @returns {string} - Mã màu được trích xuất từ chủ đề Chakra UI.
 */
export function getColorCodeFromChakraTheme(props: StyleFunctionProps): string {
    const { colorScheme, colorMode, theme } = props;

    return colorMode === 'light' ? _.get(theme, `semanticTokens.colors.${colorScheme}.default`) :
        _.get(theme, `semanticTokens.colors.${colorScheme}._dark`);
}

/**
 * ==================================================================================================================================
 */

/**
 * Tính toán độ sáng của một màu dựa trên mô hình W3C. Giá trị độ sáng nằm trong khoảng từ 0 đến 1,
 * với 0 là màu tối nhất và 1 là màu sáng nhất.
 *
 * @param {string} color - Màu hoặc mã màu (hex hoặc RGBA) đầu vào.
 * @returns {number} - Độ sáng của màu (từ 0 đến 1).
 * 
 * Ví dụ: 
 * 
 * Sử dụng hàm để kiểm tra độ sáng của mã màu
 * 
 * const hexColor = "#3498db";
 * const rgbaColor = "rgba(52, 152, 219, 0.7";
 * 
 * const brightnessHex = getColorBrightness(hexColor);
 * const brightnessRGBA = getColorBrightness(rgbaColor);
 * 
 * console.log("Độ sáng của mã màu", hexColor, "là:", brightnessHex);
 * console.log("Độ sáng của mã màu", rgbaColor, "là:", brightnessRGBA);
 */
export function getColorBrightness(color: string): number {
    // Kiểm tra xem màu có chứa thông tin RGBA hay không
    if (color.toLowerCase().indexOf("rgba") !== -1) {
        // Trích xuất giá trị RGB từ chuỗi RGBA
        const rgbaMatch = color.match(/(\d+(\.\d+)?)/g);

        if (rgbaMatch && rgbaMatch.length >= 3) {
            const r = parseFloat(rgbaMatch[0]);
            const g = parseFloat(rgbaMatch[1]);
            const b = parseFloat(rgbaMatch[2]);

            // Tính toán độ sáng theo mô hình W3C
            const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

            return brightness;
        }
    } else {
        // Loại bỏ ký tự "#" đầu tiên nếu nó tồn tại
        color = color.replace("#", "");

        // Chuyển mã màu hex thành các giá trị RGB
        let r = parseInt(color.slice(0, 2), 16);
        let g = parseInt(color.slice(2, 4), 16);
        let b = parseInt(color.slice(4, 6), 16);

        // Tính toán độ sáng theo mô hình W3C
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        return brightness;
    }

    return 0; // Trả về 0 nếu không thể xác định độ sáng
}

/**
 * ==================================================================================================================================
 */

/**
 * Chuyển đổi mã màu hex thành một mảng chứa giá trị RGBA.
 *
 * @param {string} hex - Mã màu hex đầu vào, có hoặc không có ký tự "#".
 * @returns {number[]} - Mảng chứa giá trị Red (R), Green (G), Blue (B) và Alpha (A) trong khoảng từ 0 đến 255.
 */
export function hexToRgbArray(hex: string): number[] {
    // Loại bỏ ký tự "#" từ mã màu hex (nếu có)
    hex = hex.replace(/^#/, '');

    // Kiểm tra độ dài của mã màu hex và xác định các giá trị R, G, B
    if (hex.length === 3) {
        hex = hex
            .split('')
            .map(char => char + char)
            .join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}

/**
 * ==================================================================================================================================
 */

/**
 * Chuyển đổi mã màu hex thành chuỗi rgba với độ trong suốt được chỉ định.
 * @param {string} hex - Mã màu hex đầu vào.
 * @param {number} alpha - Độ trong suốt (từ 0 đến 1), mặc định là 1 (100%).
 * @returns {string} - Chuỗi rgba kết quả.
 * 
 *  Ví dụ: 
 *  const hexColor = "#FF5733";
 *  const rgbaColor = hexToRgba(hexColor, 0.7);
 *  console.log(rgbaColor);  Kết quả: "rgba(255, 87, 51, 0.7)"
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
    const [r, g, b] = hexToRgbArray(hex);

    // Đảm bảo alpha nằm trong khoảng từ 0 đến 1
    alpha = Math.min(1, Math.max(0, alpha));

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * ==================================================================================================================================
 */

/**
 * Giảm độ trong suốt của một màu hoặc mã màu hex cho trước.
 *
 * @param {string} color - Màu hoặc mã màu hex đầu vào.
 * @param {number} reduction - Giá trị giảm độ trong suốt (từ 0 đến 1).
 * @returns {string} - Chuỗi màu mới với độ trong suốt đã giảm.
 * 
 * Ví dụ: 
 * 
 * Sử dụng hàm để giảm độ trong suốt của mã màu RGBA
 * const rgbaColor: string = "rgba(255, 255, 255, 0.80)";
 * const reducedOpacityRGBA: string = reduceOpacity(rgbaColor, 0.2);
 * console.log(reducedOpacityRGBA); // In kết quả: "rgba(255, 255, 255, 0.6)"
 * 
 * Sử dụng hàm để giảm độ trong suốt của mã màu HEX
 * const hexColor: string = "#FFFFFF";
 * const reducedOpacityHex: string = reduceOpacity(hexColor, 0.2);
 * console.log(reducedOpacityHex); // In kết quả: "rgba(255, 255, 255, 0.8)"
 */
export function reduceOpacity(color: string, reduction: number): string {
    let isHex: boolean = false;

    if (color.startsWith("#")) {
        isHex = true;
    }

    if (isHex) {
        let alpha: number = 1 - reduction;
        alpha = Math.max(0, Math.min(1, alpha));

        const newColor: string = hexToRgba(color, alpha)

        return newColor;
    } else {
        const rgbaComponents: string[] = color.match(/\d+\.\d+|\d+/g) || [];

        if (rgbaComponents.length === 4) {
            const red: number = parseInt(rgbaComponents[0]);
            const green: number = parseInt(rgbaComponents[1]);
            const blue: number = parseInt(rgbaComponents[2]);
            let alpha: number = parseFloat(rgbaComponents[3]);

            alpha -= reduction;
            alpha = Math.max(0, Math.min(1, alpha));

            const newColor: string = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            return newColor;
        }
    }

    return color;
}

/**
 * ==================================================================================================================================
 */
