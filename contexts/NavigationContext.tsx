import React, { createContext, useState } from 'react';

interface Props {
   visibleSection: string;
   setVisibleSection: React.Dispatch<React.SetStateAction<string>>;
}

const NavigationContext = createContext({} as Props);

const NavigationContextProvider = ({ children }: { children: React.ReactNode }) => {
   // Define your state and state setter functions
   const [visibleSection, setVisibleSection] = useState('');

   const contextValues = {
      visibleSection,
      setVisibleSection,
   };

   return (
      <NavigationContext.Provider value={contextValues}>
         {children}
      </NavigationContext.Provider>
   );
};

function useNavigationContext() {
   const context = React.useContext(NavigationContext);
   if (context === undefined) {
      throw new Error(
         'useNavigationContext must be used within a NavigationContextProvider',
      );
   }
   return context;
}

export { NavigationContext, NavigationContextProvider, useNavigationContext };
