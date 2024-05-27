export type TMonths = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type TAcedemicSemester = {
    name : "Autunm" | "summar" | "Fall";
    year : Date;
    code : "01" | "02" | "03";
    startMonth : TMonths;
    endMonth : TMonths;
}