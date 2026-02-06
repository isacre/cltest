import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getPassedTime(created_datetime: string) {
    const now = dayjs();
    const created = dayjs(created_datetime);
    const diff = now.diff(created, 'seconds');
    if (diff < 60) {
        return `${diff} seconds ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)} hours ago`;
    } else {
        return `${Math.floor(diff / 86400)} days ago`;
    }

}