import { Image, Team } from "@prisma/client";
import fetcher from "../../fetch/fetcher";

export type TeamType = Team & {
    icon: Image;
};

type ResponseType = {
    data: {
        teams: TeamType[];
    };
};

const getTeams = async (): Promise<ResponseType> => {
    return await fetcher("/teams/get");
};

export default getTeams;
