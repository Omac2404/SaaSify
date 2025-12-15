export interface IUser {
    id: string;
    username: string;
    email: string;
}

export interface ILoginPayload {
    username: string;
    // In a real app, password should be handled carefully
    password: string;
}

export interface IAuthResponse {
    success: boolean;
    user?: IUser;
    message?: string;
}
