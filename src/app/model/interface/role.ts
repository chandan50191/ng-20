export interface IRole {
    roleId: number,
    role: string
}

export interface IDesignation {
    designationId: number,
    designation: string
}

export interface IResponse<T> {
    message: string,
    result: boolean,
    data: T
}