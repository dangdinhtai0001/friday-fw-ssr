const DEFAULT_PADDING = "px-1 py-1";
const DEFAULT_CLASSNAME = DEFAULT_PADDING + "";

const createButtonClassname = (props: any) => {
  const {
    pill,
    outline,
    bordered = true,
    disabled,
    elevated,
    color,
    className = "",
  } = props;

  let _className = DEFAULT_CLASSNAME;
  let _color = color;
  if (color && color.startsWith("#")) {
    _color = `[${color}]`;
  }

  _className += ` bg-${_color ? _color : "primary"}`;
  _className += ` ${pill ? "rounded-full" : "rounded"}`;
  _className += ` ${outline ? "bg-transparent border" : ""}`;
  _className += ` ${bordered ? "border-1 border-black" : ""}`;
  _className += ` ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;
  _className += ` ${elevated ? "shadow" : ""}`;

  console.log(_color);

  return `${_className} ${className}`;
};

export { createButtonClassname };
