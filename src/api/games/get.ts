import { Game } from "@prisma/client";
import fetcher from "../../fetch/fetcher";

export type GameType = Game;

type ResponseType = {
    data: {
        games: GameType[];
    };
};

const getGames = async(): Promise<ResponseType> => {
    return await fetcher("/games/get");
};

export default getGames;
