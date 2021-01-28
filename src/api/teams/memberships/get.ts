import { Image, Team, TeamMembership, User } from "@prisma/client";
import fetcher from "../../../fetch/fetcher";

export type MembershipType = TeamMembership & {
    team: Team & {
        members: (TeamMembership & {
            user: User;
        })[];
        icon: Image;
    };
};

type ResponseType = {
    data: {
        memberships: MembershipType[];
    };
};

const getMemberships = async (): Promise<ResponseType> => {
    return await fetcher("/teams/memberships/get");
};

export default getMemberships;

