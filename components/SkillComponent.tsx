import classNames from "classnames";
import Image from "next/image";
const SkillComponent = ({ skill }) => {
  return (
    <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-gray-900 px-1 py-1">
      <div
        className={classNames("relative w-[25px] h-[25px]", {
          "bg-white rounded-full": skill.name === "next",
        })}
      >
        <Image
          alt="skill image"
          src={skill.image}
          fill
          sizes="(max-width: 250px), (max-width: 400px)"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">
        {skill.name}
      </span>
    </div>
  );
};
export default SkillComponent;
