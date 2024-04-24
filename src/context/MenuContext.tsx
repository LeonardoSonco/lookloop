// MenuContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

interface MenuContextType {
  pageActive: string;
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPageActive: React.Dispatch<React.SetStateAction<string>>;
}
interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextType>({
  pageActive: '',
  isNavOpen: false,
  setIsNavOpen: () => {},
  setPageActive: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [pageActive, setPageActive] = useState<string>('companyProfile');


  
  return (
    <MenuContext.Provider
      value={{ pageActive, isNavOpen, setIsNavOpen, setPageActive }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
