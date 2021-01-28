import { MembershipType } from "../../../contexts/MembershipsContext";
declare type ResponseType = {
    message: string;
    data: {
        membership: MembershipType;
    };
};
declare const acceptTeamInvitation: (data: any) => Promise<ResponseType>;
export default acceptTeamInvitation;
//# sourceMappingURL=accept.d.ts.map