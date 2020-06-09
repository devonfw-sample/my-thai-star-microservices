export const secret = '***REMOVED***';

export enum MailType {api = 0, mock, both, none}
export const mailConfig: number = MailType.mock;

export const PORT: number = 9080;
export const TESTPORT: number = 9980;
export const emailAPIaddr: string = 'http://localhost:7080';
export const frontendURL: string = 'http://localhost:4200';
export const serverURL: string = 'http://localhost:' + PORT;
export const databaseURL: string = 'http://localhost:8000/';
