interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RoundButtons = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded-circle border-0 bg-${props.color} text-${
        props.color === "secondary" ? "light" : "secondary"
      }`}
      style={{ height: "40px", width: "40px" }}
    >
      {children}
    </button>
  );
};
