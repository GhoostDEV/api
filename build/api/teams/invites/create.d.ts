export declare type CreateTeamInvitationRequiredParameters = {
    teamId: string;
    targetEmail: string;
};
declare type ResponseType = {
    message: string;
};
declare const createTeamInvitation: (data: CreateTeamInvitationRequiredParameters) => Promise<ResponseType>;
export default createTeamInvitation;
//# sourceMappingURL=create.d.ts.map