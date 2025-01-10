import { ReactNode } from "react";

interface HeaderInfoProps {
  Icon: ReactNode;
  title: string;
}

const HeaderInfo = ({ Icon, title }: HeaderInfoProps) => {
  return (
    <div className="flex items-center space-x-2">
      {Icon}
      <span className="capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400">
        {title}
      </span>
    </div>
  );
};
export default HeaderInfo;
