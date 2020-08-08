import { TimeFrame } from '../common/TimeFrame';
export declare class Activity {
    name: string;
    timeFrame: TimeFrame;
    constructor(name?: string, timeFrame?: TimeFrame);
}
export interface IActivity {
    name?: string;
    timeFrame?: TimeFrame;
}
