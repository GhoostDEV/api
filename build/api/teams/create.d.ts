import { MembershipType } from "./memberships";
export declare type CreateTeamRequiredParameters = {
    id: string;
    name: string;
};
declare type ResponseType = {
    message: string;
    data: {
        membership: MembershipType;
    };
};
declare const createTeam: (data: CreateTeamRequiredParameters, icon?: File | undefined) => Promise<ResponseType>;
export default createTeam;
//# sourceMappingURL=create.d.ts.map