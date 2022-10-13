export const RoundButtons = (props: any) => {
  return (
    <button
      className={`rounded-circle border-0 bg-${props.color} text-${
        props.color === "secondary" ? "light" : "secondary"
      }`}
      style={{ height: "40px", width: "40px" }}
    >
      {props.children}
    </button>
  );
};
