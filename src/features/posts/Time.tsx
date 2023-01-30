import { parseISO, formatDistanceToNow } from "date-fns";

export const Time = ({ timestamp }: { timestamp: string }) => {
    let newTime = "";

    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        newTime = `${timePeriod} ago`;
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{newTime}</i>
        </span>
    );
}