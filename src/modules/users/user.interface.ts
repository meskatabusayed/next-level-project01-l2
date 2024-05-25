

export type TUser = {
    id : string;
    password : string;
    needsPasswordChange : boolean;
    role : 'dmin' | 'student' | 'faculty';
    status : 'in-prograss' | 'blocked',
    isDeleted : boolean;

}