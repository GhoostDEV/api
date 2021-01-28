import { Image, Team } from "@prisma/client";
export declare type TeamType = Team & {
    icon: Image;
};
declare type ResponseType = {
    data: {
        teams: TeamType[];
    };
};
declare const getTeams: () => Promise<ResponseType>;
export default getTeams;
//# sourceMappingURL=get.d.ts.map