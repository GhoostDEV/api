import { Image, News, User } from "@prisma/client";
import fetcher from "../../fetch/fetcher";

export type NewsType = News & {
    cover?: Image;
    author: User;
};

type ResponseType = {
    data: {
        news: NewsType[];
    };
};

const getNews = async (): Promise<ResponseType> => {
    return await fetcher("/news/get");
};

export default getNews; 