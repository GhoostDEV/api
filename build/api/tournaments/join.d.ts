export declare type JoinTournamentRequiredParameters = {
    tournamentId: string;
    teamId: string;
    players: number[];
};
declare const joinTournament: (data: JoinTournamentRequiredParameters) => Promise<{
    data: any;
    message: string;
}>;
export default joinTournament;
//# sourceMappingURL=join.d.ts.map