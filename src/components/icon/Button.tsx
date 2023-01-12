const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="-m-3 cursor-pointer rounded-full p-3 hover:bg-violet-50 hover:text-violet-600">
      {children}
    </div>
  );
};

export default IconButton;
