import { MembershipType } from "../create";
export declare type AcceptTeamInvitationRequiredParemeters = {
    teamId: string;
};
declare type ResponseType = {
    message: string;
    data: {
        membership: MembershipType;
    };
};
declare const acceptTeamInvitation: (data: AcceptTeamInvitationRequiredParemeters) => Promise<ResponseType>;
export default acceptTeamInvitation;
//# sourceMappingURL=accept.d.ts.map