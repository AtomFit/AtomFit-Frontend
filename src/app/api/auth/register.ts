import { toast } from "sonner";

export const register = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      {
        method: "POST",
      }
    );
    if (!response.ok) {
      const errMsg = await response.json();
      if (errMsg.detail) throw new Error(errMsg.detail);
      throw new Error(errMsg);
    }
    toast.success("You registered with success!");
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Failed to fetch")
        return {
          error: "Invalid credentials",
        };
      return { error: error.message };
    }
  }
};

const checkError = (error: unknown) => {
  if (error instanceof Error) {
    if (error.message === "Failed to fetch")
      return {
        error: "Invalid credentials",
      };
    return { error: error.message };
  }
};
