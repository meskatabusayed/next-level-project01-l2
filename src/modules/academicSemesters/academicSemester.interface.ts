export type TMonths = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

export type TAcademicSemesterName = "Autunm" | "summar" | "Fall";
export type TAcademicSemesterCode = "01" | "02" | "03"


export type TAcedemicSemester = {
    name : TAcademicSemesterName;
    year : string;
    code : TAcademicSemesterCode;
    startMonth : TMonths;
    endMonth : TMonths;
}