import { Game } from "@prisma/client";
export declare type GameType = Game;
declare type ResponseType = {
    data: {
        games: GameType[];
    };
};
declare const getNews: () => Promise<ResponseType>;
export default getNews;
//# sourceMappingURL=get.d.ts.map