import { GameAccountType } from "./get";
declare type GameIDType = string;
export declare type ConnectGameAccountRequiredParameters = {
    gameId: GameIDType;
    id: string;
};
declare type ResponseType = {
    message: string;
    data: {
        gameAccount: GameAccountType;
    };
};
declare const connectGameAccount: (data: ConnectGameAccountRequiredParameters) => Promise<ResponseType>;
export default connectGameAccount;
//# sourceMappingURL=connect.d.ts.map