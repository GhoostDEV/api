import fetcher from "../../../fetch/fetcher";
import { MembershipType } from "../memberships";

export type AcceptTeamInvitationRequiredParemeters = {
    teamId: string;
};

type ResponseType = {
    message: string;
    data: {
        membership: MembershipType;
    };
};

const acceptTeamInvitation = async (data: AcceptTeamInvitationRequiredParemeters): Promise<ResponseType> => {
    return await fetcher("/teams/invitations/accept", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default acceptTeamInvitation;