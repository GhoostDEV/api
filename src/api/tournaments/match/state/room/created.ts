import fetcher from "../../../../../fetch/fetcher";

export type TournamentMatchRoomCreatedRequiredParameters = {
    matchId: number;
};

type ResponseType = {};

const setRoomCreated = async (data: TournamentMatchRoomCreatedRequiredParameters): Promise<ResponseType> => {
    return await fetcher("/tournaments/match/state/room/created", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default setRoomCreated;