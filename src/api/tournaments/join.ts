import fetcher from "../../fetch/fetcher";

export type JoinTournamentRequiredParameters =  {
    tournamentId: string;
    teamId: string;
    players: number[];
};

const joinTournament = async(data: JoinTournamentRequiredParameters) => {
    return await fetcher("/tournaments/join", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default joinTournament;
