import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getFetch = async (url) => {
  const token = sessionStorage.getItem("token");

  try {
    const res = await axios.get(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return { ...res, success: true };
  } catch (err) {
    console.log(err);
    return { ...err, success: false };
  }
};

export const postFetch = async (url, data) => {
  const token = sessionStorage.getItem("token");

  try {
    const res = await axios.post(baseUrl + url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return { ...res, success: true };
  } catch (err) {
    console.log(err);
    return { ...err, success: false };
  }
};

export const putfetch = async (url, data) => {
  const token = sessionStorage.getItem("token");

  try {
    const res = await axios.put(baseUrl + url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return { ...res, success: true };
  } catch (err) {
    console.log(err);
    return { ...err, success: false };
  }
};

export const delFetch = async (url) => {
  const token = sessionStorage.getItem("token");

  try {
    const res = await axios.delete(baseUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    return { ...res, success: true };
  } catch (err) {
    console.log(err);
    return { ...err, success: false };
  }
};
