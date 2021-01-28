import { Image, Team, TeamMembership, User } from "@prisma/client";
export declare type MembershipType = TeamMembership & {
    team: Team & {
        members: (TeamMembership & {
            user: User;
        })[];
        icon: Image;
    };
};
declare type ResponseType = {
    data: {
        memberships: MembershipType[];
    };
};
declare const getMemberships: () => Promise<ResponseType>;
export default getMemberships;
//# sourceMappingURL=get.d.ts.map