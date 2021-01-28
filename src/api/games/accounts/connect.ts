import fetcher from "../../../fetch/fetcher";
import { GameAccountType } from "./get";

type GameIDType = string;

export type ConnectGameAccountRequiredParameters = {
    gameId: GameIDType,
    id: string,
};

type ResponseType = {
    message: string;
    data: {
        gameAccount: GameAccountType;
    };
};

const connectGameAccount = async (data: ConnectGameAccountRequiredParameters): Promise<ResponseType> => {
    return await fetcher("/games/accounts/connect", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default connectGameAccount;
