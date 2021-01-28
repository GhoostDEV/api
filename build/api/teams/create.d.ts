import { Image, Team, TeamMembership, User } from "@prisma/client";
export declare type CreateTeamRequiredParameters = {
    id: string;
    name: string;
};
export declare type MembershipType = TeamMembership & {
    team: Team & {
        members: (TeamMembership & {
            user: User;
        })[];
        icon: Image;
    };
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