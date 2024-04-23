// MenuContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

interface MenuContextType {
  windowSize: number;
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWindowSize: React.Dispatch<React.SetStateAction<number>>;
}
interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextType>({
  windowSize: 0,
  isNavOpen: false,
  setIsNavOpen: () => {},
  setWindowSize: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(innerWidth);


  
  return (
    <MenuContext.Provider
      value={{ windowSize, isNavOpen, setIsNavOpen, setWindowSize }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
