import { NewsType } from "./get";
export declare type CreateNewsRequiredParameters = {
    title: string;
    image?: {
        width: number;
        height: number;
        path: string;
    };
    content: string;
};
declare type ResponseType = {
    message: string;
    data: {
        news: NewsType;
    };
};
declare const createNews: (data: CreateNewsRequiredParameters) => Promise<ResponseType>;
export default createNews;
//# sourceMappingURL=create.d.ts.map