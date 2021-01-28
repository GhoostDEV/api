import { Image, Team, TeamInvitation, User } from "@prisma/client";
import fetcher from "../../../fetch/fetcher";

export type TeamInvitationType = TeamInvitation & {
    user: User;
    team: Team & {
        icon: Image;
    };
};

type ResponseType = {
    data: {    
        invitations: TeamInvitationType[];
    };
};

const getTeamInvitations = async (): Promise<ResponseType> => {
    return await fetcher("/teams/invitations/get");
};

export default getTeamInvitations;