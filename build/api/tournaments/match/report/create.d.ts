import { ReportType } from "@prisma/client";
export declare type CreateTournamentMatchReportRequiredParameters = {
    type: ReportType;
    title: string;
    description: string;
    matchId: number;
};
declare const createTournamentMatchReport: (data: CreateTournamentMatchReportRequiredParameters) => Promise<{
    data: any;
    message: string;
}>;
export default createTournamentMatchReport;
//# sourceMappingURL=create.d.ts.map