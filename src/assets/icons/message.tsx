export const MessageIcon = ({ color }: { color?: string }): JSX.Element => {
  const fill = color ?? "#818187";

  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 2.25V12.75H1.5V2.25H16.5ZM18 0.75H0V14.25H18V0.75ZM16.5 12.75L11.6055 7.7865L9.02175 10.3988L6.45825 7.755L1.5 12.75L5.28825 6.75L1.5 2.25L9.02175 7.8345L16.5 2.25L12.7515 6.7575L16.5 12.75Z"
        fill={fill}
      />
    </svg>
  );
};
