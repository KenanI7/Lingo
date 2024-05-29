import axios from "axios";

export const getUser = async (token: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
