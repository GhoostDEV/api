import { ReportType } from "@prisma/client";
import fetcher from "../../../../fetch/fetcher";

export type CreateTournamentMatchReportRequiredParameters = {
    type: ReportType;
    title: string;
    description: string;
    matchId: number;
};

const createTournamentMatchReport = async (data: CreateTournamentMatchReportRequiredParameters) => {
    return await fetcher("/tournament/match/report", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export default createTournamentMatchReport;
