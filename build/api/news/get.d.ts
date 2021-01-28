import { Image, News, User } from "@prisma/client";
export declare type NewsType = News & {
    cover?: Image;
    author: User;
};
declare type ResponseType = {
    data: {
        news: NewsType[];
    };
};
declare const getNews: () => Promise<ResponseType>;
export default getNews;
//# sourceMappingURL=get.d.ts.map