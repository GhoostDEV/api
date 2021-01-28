export declare type RejectTeamInvitationRequiredParemeters = {
    teamId: string;
};
declare type ResponseType = {
    message: string;
};
declare const rejectTeamInvitation: (data: RejectTeamInvitationRequiredParemeters) => Promise<ResponseType>;
export default rejectTeamInvitation;
//# sourceMappingURL=reject.d.ts.map