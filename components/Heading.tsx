const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="capitalize text-base md:text-lg text-blue-700 dark:text-zinc-400 font-bold mb-3">
      {children}
    </h3>
  );
};
export default Heading;
