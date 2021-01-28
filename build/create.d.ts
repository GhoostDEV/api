import { MembershipType } from "../../contexts/MembershipsContext";
declare type ResponseType = {
    message: string;
    data: {
        membership: MembershipType;
    };
};
declare const createTeam: (data: any, icon?: File | undefined) => Promise<ResponseType>;
export default createTeam;
//# sourceMappingURL=create.d.ts.map