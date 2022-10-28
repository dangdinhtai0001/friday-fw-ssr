import { LoadingIcon as _LoadingIcon } from "@components/icons";

export interface LoadingIconProps {
    existIcon: boolean;
    loading?: boolean | object;
    className?: string
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ loading, existIcon,className }) => {
    // return <div role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600">
    return <div className={`${className}`}>
        <_LoadingIcon></_LoadingIcon>
    </div>
};

export default LoadingIcon;