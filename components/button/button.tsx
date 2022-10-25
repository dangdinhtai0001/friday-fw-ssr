import { createButtonClassname } from "./helper";

const Button = (props: any) => {
  const { children } = props;
  return <button className={createButtonClassname(props)}>{children}</button>;
};

export default Button;
