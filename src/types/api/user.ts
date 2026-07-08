enum UserRole {
    "qc" = "qc","manager" = "manager"
}

interface IUser{
    "employee_id": number;
    "first_name": string;
    "last_name": string;
    "middle_name": string;
    "role":UserRole;
    "is_active": boolean;
    "created_at": string;
}

type UserRegistration = Omit<IUser,"employee_id"|"is_active"|"created_at">

export type{
    UserRole,
    IUser,
    UserRegistration
}