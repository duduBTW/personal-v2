const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="-m-2 cursor-pointer rounded-full p-2 hover:bg-violet-50 hover:text-violet-600">
      {children}
    </div>
  );
};

export default IconButton;
