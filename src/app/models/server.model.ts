export type TServerStatus = 'online' | 'offline';

export interface IServer {
	id: number;
	name: string;
	status: TServerStatus;
}
