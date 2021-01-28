import post from "../../fetch/post";
import { Image, Team, TeamMembership, User } from "@prisma/client";

export type CreateTeamRequiredParameters = {
    id: string;
    name: string;
};

export type MembershipType = TeamMembership & {
    team: Team & {
        members: (TeamMembership & {
            user: User;
        })[];
        icon: Image;
    };
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

    return await post("/team/create", formData);
};

export default createTeam;