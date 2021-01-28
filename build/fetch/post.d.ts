import { AxiosRequestConfig } from "axios";
declare type ResponseType = {
    data: any;
    message: string;
};
declare const post: (url: string, input?: FormData | undefined, config?: AxiosRequestConfig | undefined) => Promise<ResponseType>;
export default post;
//# sourceMappingURL=post.d.ts.map