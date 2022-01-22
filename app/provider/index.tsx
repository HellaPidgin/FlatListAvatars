import React, { useState, createContext } from "react";
import { AppStateDefaults } from "./types";

const appDefaults: AppStateDefaults = {

};
export const AppProviderContext = createContext(appDefaults);
export const AppProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal;
}) => {
  return (
    <AppProviderContext.Provider
      value={{
 
      }}
    >
      {props.children}
    </AppProviderContext.Provider>
  );
};