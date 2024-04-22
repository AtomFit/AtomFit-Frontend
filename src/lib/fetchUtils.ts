import { toast } from "sonner";

export const serverError =
  "Server is down at the moment please try again later";

export const checkError = (error: unknown) => {
  if (error instanceof Error) {
    if (error.message === "Failed to fetch") {
      toast.error(serverError);
      return {
        error: serverError,
      };
    }
    toast.error(error.message);
    return { error: error.message };
  }
};

export const getHeaders = () => {
  return {
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
};
