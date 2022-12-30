// react imports
// 3rd imports
// local imports
import { FormProps } from "./Form.d";
import { useFormContext } from './FormContext';
import useBaseForm from './useBaseForm';

const useInternalForm = (props: FormProps) => {
    const { context, helper } = useFormContext();

    const baseFormHooks = useBaseForm(props, context, helper);

    return { ...baseFormHooks };
}

export default useInternalForm;