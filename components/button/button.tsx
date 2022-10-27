// import './button.module.scss';
import styles from './button.module.scss'

const Button = () => {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  );
};

export default Button;
