import { Game, Image, Team, Tournament, TournamentApplication, TournamentParticipation } from "@prisma/client";
export declare type TournamentType = Tournament & {
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
declare type ResponseType = {
    data: {
        tournaments: TournamentType[];
    };
};
declare const getTournaments: () => Promise<ResponseType>;
export default getTournaments;
//# sourceMappingURL=get.d.ts.map