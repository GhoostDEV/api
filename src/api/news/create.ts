import fetcher from "../../fetch/fetcher";
import { NewsType } from "./get";

export type CreateNewsRequiredParameters = {
    title: string;
    image?: {
        width: number;
        height: number;
        path: string;
    };
    content: string;
};

type ResponseType = {
    message: string;
    data: {
        news: NewsType;
    };
};

const createNews = async (data: CreateNewsRequiredParameters): Promise<ResponseType> => {
    return await fetcher("/news/create", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default createNews;
