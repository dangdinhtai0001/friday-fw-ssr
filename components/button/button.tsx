import styles from './button.module.scss'

const Button = () => {
  return (
    <button
      type="button"
      className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 hover:bg-blue-800 shadow-lg transform active:scale-75 transition-transform"
    >
      Button
    </button>
  );
};

export default Button;
