import { createButtonClassname } from "./helper";

const Button = (props: any) => {
  const { children, onClick } = props;
  return <button className={createButtonClassname(props)} onClick={onClick}>{children}</button>;
};

export default Button;
