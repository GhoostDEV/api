import axios, { AxiosRequestConfig } from "axios";



type ResponseType = {
    data: any;
    message: string;
};

const post = async (url: string, input?: FormData, config?: AxiosRequestConfig): Promise<ResponseType> => {
    if(input?.has("icon")) config = {
        ...config,
        headers: {
            "content-type": "multipart/form-data",
        },
    };

    const resp = await axios.post(`/api${url}`, input, config);
    if(resp.status !== 200) throw new Error("Ghoost's servers are down or you don't have internet connection. Try again later!");
    
    const { data } = await resp;
    if (data.error) throw new Error(data);

    return data;
};

export default post;
  