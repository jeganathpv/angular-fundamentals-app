export interface Header{
    Name: string;
    Path: string;
    IsActive: boolean;
}

export interface User{
    Id: number;
    Name: string;
    Age: number;
    Email: string;
    Address: string;
    IsActive?: boolean;
    Group: string;
}