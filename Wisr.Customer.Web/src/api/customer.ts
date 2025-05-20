export interface CustomerResponse {
    id: number;
    firstName: string;
    lastName: string;
    accounts: CustomerResponseAccount[];
}

export interface CustomerResponseAccount {
    name: string;
    provider: string;
    open: boolean;
    balance: number;
}