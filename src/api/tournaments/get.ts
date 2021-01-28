import { Game, Image, Team, Tournament, TournamentApplication, TournamentParticipation } from "@prisma/client";
import fetcher from "../../fetch/fetcher";

export type TournamentType = Tournament & {
    applicants: (TournamentApplication & {
        team: Team;
    })[];
    participants: (TournamentParticipation & {
        team: Team;
    })[];
    icon: Image;
    game: Game;
    organizer: Team;
};

type ResponseType = {
    data: {
        tournaments: TournamentType[];
    };
};

const getTournaments = async (): Promise<ResponseType> => {
    return await fetcher("/tournaments/get");
};

export default getTournaments;
