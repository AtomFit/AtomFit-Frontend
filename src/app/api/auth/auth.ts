import { checkError, getHeaders } from "@/lib/fetchUtils";
import { toast } from "sonner";

type registerParams = {
  height: number;
  weight: number;
  age: number;
  goal: "lose" | "maintain" | "gain";
  weight_preference: number;
  is_male: boolean;
  username: string;
  email: string;
  password: string;
};

export const register = async (body: registerParams) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      {
        method: "POST",
        headers: getHeaders,
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      const errMsg = await response.json();
      throw new Error(errMsg.detail);
    }
    toast.success("You registered with success!");
    return await response.json();
  } catch (error) {
    return checkError(error);
  }
};

export const signout = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers: getHeaders,
    });
    if (!response.ok) {
      const errMsg = await response.json();
      throw new Error(errMsg.detail);
    }
    toast.success("You signed out with success!");
    return await response.json();
  } catch (error) {
    return checkError(error);
  }
};

export const refresh = async (token: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {
      method: "POST",
      credentials: "include",
      headers: getHeaders,
    });
    if (!response.ok) {
      const errMsg = await response.json();
      throw new Error(errMsg.detail);
    }
    const data = await response.json();
    return {
      ...token,
      accessToken: data.access,
      expiresIn: Date.now() + 15 * 60 * 1000,
    };
  } catch (error) {
    return checkError(error);
  }
};
