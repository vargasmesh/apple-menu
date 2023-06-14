export const GlobalNav = ({
  isGlobalNavOpen,
}: {
  isGlobalNavOpen: boolean;
}) => {
  return (
    <li
      className={`absolute bg-[#161617] z-10 w-full transition-all duration-[600ms] ${
        isGlobalNavOpen ? "h-screen visible" : "h-0 invisible"
      }`}
    ></li>
  );
};
