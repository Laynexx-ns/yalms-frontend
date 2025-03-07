export interface Expression {
    Id: number,
    Status: string,
    Result: number
}

export interface QueueItem {
    parentId: number;
    id: number;
    arg1: number;
    arg2: number;
    operation: string;
    operation_time: number;
    result: number;
}
