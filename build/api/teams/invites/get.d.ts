import { Image, Team, TeamInvitation, User } from "@prisma/client";
export declare type TeamInvitationType = TeamInvitation & {
    user: User;
    team: Team & {
        icon: Image;
    };
};
declare type ResponseType = {
    data: {
        invitations: TeamInvitationType[];
    };
};
declare const getTeamInvitations: () => Promise<ResponseType>;
export default getTeamInvitations;
//# sourceMappingURL=get.d.ts.map