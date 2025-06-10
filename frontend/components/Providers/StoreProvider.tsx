"use client";

import * as React from "react";
import { Provider } from "react-redux";
import store from "@/lib/redux/Store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
