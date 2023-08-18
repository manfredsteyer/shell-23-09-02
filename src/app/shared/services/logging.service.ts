import { Injectable } from '@angular/core';
import { LogMessage } from '../models/log-message.model';

@Injectable()
export class LoggingService {
    constructor() {}

    // error
    error(message: string, data?: LogMessage): void {
        console.error(`Error: ${message}`, data);
    }

    // display error dialog for fatal application errors
    applicationError(message: string, data: LogMessage): void {
        console.error(`Error: ${message}`, data);
    }

    // info
    info(message: string, data?: LogMessage): void {
        console.log(`Info: ${message}`, data);
    }

    // warn
    warn(message: string, data?: LogMessage): void {
        console.warn(`Warning: ${message}`, data);
    }

    // success
    success(message: string, data?: LogMessage): void {
        console.log(`Success: ${message}`, data);
    }
}
