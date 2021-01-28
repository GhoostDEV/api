import { Image, Team, TeamInvitation, User } from "@prisma/client";
import fetcher from "../../../fetch/fetcher";

export type TeamInvitationType = TeamInvitation & {
    user: User;
    team: Team & {
        icon: Image;
    };
};

const getTeamInvitations = async () => {
    return await fetcher("/teams/invitations/get");
};

export default getTeamInvitations;