import fetcher from "../../../fetch/fetcher";

export type RejectTeamInvitationRequiredParemeters = {
    teamId: string;
};

type ResponseType = {
    message: string;
};

const rejectTeamInvitation = async (data: RejectTeamInvitationRequiredParemeters): Promise<ResponseType> => {
    return await fetcher("/team/invitations/reject", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default rejectTeamInvitation;