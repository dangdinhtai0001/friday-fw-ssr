import styles from './button.module.scss'

export interface ButtonProps {

}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-[10px] py-[5px] bg-th-primary-medium rounded-md text-white outline-none hover:bg-th-primary-dark shadow-lg transform active:scale-75 hover:scale-110 transition-transform"
    >
      Button
    </button>
  );
};

export default Button;
