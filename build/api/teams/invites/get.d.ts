import { Image, Team, TeamInvitation, User } from "@prisma/client";
export declare type TeamInvitationType = TeamInvitation & {
    user: User;
    team: Team & {
        icon: Image;
    };
};
declare const getTeamInvitations: () => Promise<{
    data: any;
    message: string;
}>;
export default getTeamInvitations;
//# sourceMappingURL=get.d.ts.map