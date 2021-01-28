declare type ResponseType = {
    data: any;
    message: string;
};
declare const fetcher: (input: RequestInfo, init?: RequestInit | undefined) => Promise<ResponseType>;
export default fetcher;
//# sourceMappingURL=fetcher.d.ts.map