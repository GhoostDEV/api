import { GameAccount } from "@prisma/client";
export declare type GameAccountType = GameAccount;
declare type ResponseType = {
    data: {
        accounts: GameAccountType[];
    };
};
declare const getGameAccounts: () => Promise<ResponseType>;
export default getGameAccounts;
//# sourceMappingURL=get.d.ts.map