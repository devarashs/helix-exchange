import { toast } from "sonner";
import { UserInfo, UserState } from "@/lib/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";

const initialState = {
  userInfo: hasCookie("userInfo")
    ? JSON.parse(getCookie("userInfo") as string)
    : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserInfo>) => {
      const newState = state;
      newState.userInfo = action.payload;
      setCookie("userInfo", JSON.stringify(newState.userInfo), {
        sameSite: true,
        secure: true,
      });

      toast("You Have Logged In Successfully.");
    },
    signOut: (state) => {
      const newState = state;
      newState.userInfo = null;
      deleteCookie("userInfo");

      toast("You Have Logged Out Successfully.");
      window.location.replace("/authportal");
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const selectUserInfo = (state: { user: UserState }) =>
  state.user.userInfo;
