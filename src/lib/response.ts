import { NextResponse } from 'next/server';

interface APIResponse<T> {
    status: string;
    timestamp: Date;
    data?: T;
    message?: string;
    errors?: string;
}

export function ResponsePayload<T>(data: T, status: number = 200, message?: string, errors?: string): NextResponse {
    const responsePayload: APIResponse<T> = {
        status: status >= 200 && status < 300 ? 'success' : 'error',
        timestamp: new Date(),
        data,
        message,
        errors
    };

    return new NextResponse(JSON.stringify(responsePayload), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
