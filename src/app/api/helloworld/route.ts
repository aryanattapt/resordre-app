import { ResponsePayload } from  '../../../lib/response';
import type { HelloWorldResponse } from '../../../types/helloworld.response';

export async function GET() {
    const response: HelloWorldResponse = {
        message: 'Hello World',
    };

    return ResponsePayload<HelloWorldResponse>(response);
}
