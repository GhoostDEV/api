import { GameAccount } from "@prisma/client";
import fetcher from "../../../fetch/fetcher";

export type GameAccountType = GameAccount;

type ResponseType = {
    data: {
        accounts: GameAccountType[];
    };
};

const getGameAccounts = async (): Promise<ResponseType> => {
    return await fetcher("/games/accounts/get");
};

export default getGameAccounts;
