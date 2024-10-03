import axios from "axios";

const CMS_URL = process.env.CMS_URL;
const CMS_TOKEN = process.env.CMS_TOKEN;

const axiosInstance = axios.create({
  baseURL: CMS_URL,
  headers: {
    Authorization: `Bearer ${CMS_TOKEN}`,
  },
});

class CmsProvider {
  get = async (url: string) => {
    const response = await axiosInstance.get(url);
    return response.data.data;
  };
}

export const cmsProvider = new CmsProvider();
