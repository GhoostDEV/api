import { Game } from "@prisma/client";
export declare type GameType = Game;
declare type ResponseType = {
    data: {
        games: GameType[];
    };
};
declare const getGames: () => Promise<ResponseType>;
export default getGames;
//# sourceMappingURL=get.d.ts.map