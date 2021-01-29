import { RoomCode, TournamentApplication, TournamentMatchState } from "@prisma/client";
export declare type GetTournamentStateResponseType = {
    message: "ALREADY_APPLIED_TO_THIS_TOURNAMENT";
    application: TournamentApplication;
} | {
    message: "FREE_TO_JOIN_TOURNAMENT";
} | {
    message: "WAITING_TO_START_TOURNAMENT";
} | {
    message: "NOT_PARTICIPATING_IN_THIS_TOURNAMENT";
} | {
    message: "TOURNAMENT_FINISHED";
    placement: number;
} | {
    message: "CREATE_ROOM";
    roomCode: RoomCode;
} | {
    message: "WAITING_FOR_ROOM_CREATION";
    until: string;
} | {
    message: "MATCH_REPORTED_AWAITING_INVESTIGATION";
} | {
    message: "ONGOING";
    room: RoomCode;
    state?: TournamentMatchState;
} | {
    message: "MATCH_FINISHED_WAITING_FOR_OTHERS";
};
export declare type GetTournamentStateRequiredParameters = {
    tournamentId: string;
};
declare type ResponseType = {
    data: {
        state: GetTournamentStateResponseType;
    };
};
declare const getTournamentState: (data: GetTournamentStateRequiredParameters) => Promise<ResponseType>;
export default getTournamentState;
//# sourceMappingURL=get.d.ts.map