type NavigationItem = {
  title: string;
  component: React.FC;
};

interface NavigationItemProps {
  headings: NavigationItem[];
  setCurrentTab: (index: number) => void;
}

const Navbar: React.FC<NavigationItemProps> = ({ headings, setCurrentTab }) => {
  const handleSetCurrentTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className="flex w-full bg-blue-300 gap-3 p-4 border-2">
      {headings.map((elem, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleSetCurrentTab(index);
            }}
            className="border-2 border-black rounded-md py-2 px-3"
          >
            {elem.title}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
