import Translate2Icon from "remixicon-react/Translate2Icon";
import IconButton from "components/icon/Button";

const Nav = ({
  children,
  startIcon,
}: {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
}) => {
  return (
    <nav className="relative pt-10 pb-3">
      <div className="relative flex justify-between px-5 text-violet-600  md:container">
        <div className="flex items-center gap-6 text-violet-400">
          {startIcon}
          <IconButton>
            <Translate2Icon />
          </IconButton>
        </div>
        <div className="text-xl font-medium">{children}</div>
        {children && (
          <div className="absolute right-16 -bottom-3 h-px w-14 bg-violet-300 md:w-20" />
        )}
      </div>
      <div className="absolute right-16 bottom-0 left-0 h-px w-6 bg-violet-300 md:w-12" />
    </nav>
  );
};

export default Nav;
