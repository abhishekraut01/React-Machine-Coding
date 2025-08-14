export type PageProps = {
  data: {
    Name: string;
    College: string;
    Designation: string;
    skills: string[];
    Theme: string;
  };
  setData: React.Dispatch<React.SetStateAction<{
    Name: string;
    College: string;
    Designation: string;
    skills: string[];
    Theme: string;
  }>>;
};


export type NavigationItem = {
  title: string;
  component: React.FC<PageProps>;
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
