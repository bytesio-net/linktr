interface FixedRightProps {
  children?: React.ReactNode;
}

export const TopFixedRight = ({ children }: FixedRightProps) => {
  return (
    <div className="fixed right-5 top-5">
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
