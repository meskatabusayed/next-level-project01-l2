export type Month = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type AcedemicSemester = {
    name : string;
    year : Date;
    code : string;
    startMonth : Month;
    endMonth : Month;
}