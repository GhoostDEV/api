import { MembershipType } from "../create";
import fetcher from "../../../fetch/fetcher";

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
    return await fetcher("/team/invitations/accept", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default acceptTeamInvitation;