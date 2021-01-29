import { Game, Image, Reward, RoomCode, Team, TeamMembership, Tournament, TournamentMatch, TournamentMatchReport, TournamentParticipation, User } from "@prisma/client";
export declare type ReportType = TournamentMatchReport & {
    reporter: User;
    match: TournamentMatch & {
        roomCode: RoomCode;
        tournament: Tournament & {
            game: Game;
            organizer: Team & {
                members: (TeamMembership & {
                    user: User;
                })[];
            };
            rewards: Reward[];
        };
        participants: (TournamentParticipation & {
            players: User[];
            team: Team;
        })[];
    };
    attachments: Image[];
};
//# sourceMappingURL=get.d.ts.map