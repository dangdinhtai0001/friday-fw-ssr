// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { ContextHelper, ContextState, FormProps, RefreshRulesMode } from "./Form.d";

let mounted = false;
const useBaseForm = (props: FormProps, context: ContextState, helper: ContextHelper) => {

    const { refreshRuleConfig, refreshRule } = props;

    /**
     * Hàm thực thi khi cần thực hiện rules. Sẽ chỉ thực hiện theo cấu hình tương ứng
     * @param currentMode Mode yêu cầu thực hiện
     */
    const handleOnRefreshRule = (currentMode: RefreshRulesMode) => {
        // lấy ra danh sách các rule cần apply ở mode 'onMounted'
        let _rules = refreshRuleConfig?.[currentMode];
        // thực hiện rule
        refreshRule?.(_rules!, currentMode, context, helper);
    };

    /**
     * Sự kiện diễn ra khi mount form
     */
    React.useEffect(() => {
        let ignore = false;

        async function handleOnMountForm() {
            // Chuyển trạng thái của form về thành mounted
            helper.commitStatus('mounted');

            // Gọi trigger onMounted của props
            await props.onMounted?.(context, helper);

            handleOnRefreshRule('onMounted');
        };

        if (!ignore && !mounted) {
            handleOnMountForm();
        }

        mounted = true;
        return () => {
            ignore = true;
            mounted = false;
        }
    }, []);



    return { handleOnRefreshRule };
}

export default useBaseForm;