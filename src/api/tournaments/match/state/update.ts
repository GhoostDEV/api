import fetcher from "../../../../fetch/fetcher";

export type UpdateTournamentMatchStateRequiredParemeters = {
    matchId: number;
    state: string;
};

type ResponseType = {};

const updateTournamentMatchState = async (data: UpdateTournamentMatchStateRequiredParemeters): Promise<ResponseType> => {
    return await fetcher("/tournaments/match/state/update", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default updateTournamentMatchState;
