import fetcher from "../../../../fetch/fetcher";
import { Game, Image, Reward, RoomCode, Team, TeamMembership, Tournament, TournamentMatch, TournamentMatchReport, TournamentParticipation, User } from "@prisma/client";

export type ReportType = TournamentMatchReport & {
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

type ResponseType = {
    data: {
        reports: ReportType[];
    };
};

const getTournamentReports = async (): Promise<ResponseType> => {
    return await fetcher("/tournament/match/report/get");
};
