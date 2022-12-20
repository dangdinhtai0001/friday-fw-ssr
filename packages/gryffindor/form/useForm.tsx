// react imports
// 3rd imports
// local imports
import { FormProps } from "./Form.d";
import { useFormContext } from './FormContext';
import useBaseForm from './useBaseForm';

const useForm = (props: FormProps) => {
    const { context, helper } = useFormContext();

    const { } = useBaseForm(props, context, helper);

    return {};
}

export default useForm;