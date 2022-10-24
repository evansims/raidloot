import { createContext, useContext, useMemo, useState } from "react";

// Context
export const AppStateContext = createContext();

// Provider
export function AppStateProvider({ children }) {
  const [selectedRaid, setSelectedRaid] = useState("Abyssos");
  const [selectedGamer, setSelectedGamer] = useState(123);

  const AppStateData = useMemo(
    () => ({
      selectedRaid,
      setSelectedRaid,
      selectedGamer,
      setSelectedGamer,
    }),
    [selectedRaid, selectedGamer]
  );

  return (
    <AppStateContext.Provider value={AppStateData}>
      <p>Provider: {selectedGamer}</p>
      {children}
    </AppStateContext.Provider>
  );
}

// useContext
export function useAppState() {
  return useContext(AppStateContext);
}
