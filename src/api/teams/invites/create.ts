import fetcher from "../../../fetch/fetcher";

export type CreateTeamInvitationRequiredParameters = {
    teamId: string;
    targetEmail: string;
};

type ResponseType = {
    message: string;
};

const createTeamInvitation = async (data: CreateTeamInvitationRequiredParameters): Promise<ResponseType> => {
    return await fetcher("/team/invitations/create", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default createTeamInvitation;