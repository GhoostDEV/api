import post from "../../fetch/post";
import { MembershipType } from "./memberships";

export type CreateTeamRequiredParameters = {
    id: string;
    name: string;
};

type ResponseType = {
    message: string;
    data: {
        membership: MembershipType;
    };
};

const createTeam = async (data: CreateTeamRequiredParameters, icon?: File): Promise<ResponseType> => {
    const formData = new FormData();

    if(icon) formData.append("icon", icon);
    formData.append("data", JSON.stringify(data));

    return await post("/teams/create", formData);
};

export default createTeam;