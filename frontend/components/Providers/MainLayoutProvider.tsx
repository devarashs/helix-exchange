import React from "react";
import AppHeader from "../common/AppHeader";
import AppNavigator from "../common/AppNavigator";

export default function MainLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <AppNavigator />
      {children}
    </>
  );
}
