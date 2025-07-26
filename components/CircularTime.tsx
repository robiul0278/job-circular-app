import { CalendarDays, AlarmClock, Clock4, Hourglass} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { deadlineCountdown, formatDate } from "@/utils/format-date";

type TTimeTable = {
        published: string;
    applyStart:string;
    deadline: string;
}

export default async function JobCircularTimeTable({published,applyStart,deadline}:TTimeTable) {
    return (
        <div className="">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                সার্কুলার সময়সূচীঃ
            </h3>

            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="flex items-center space-x-3">
                            <CalendarDays className="w-4 h-4" />
                            <span className="font-medium">প্রকাশের তারিখঃ</span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{formatDate(published)}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="flex items-center space-x-3">
                            <AlarmClock className="w-4 h-4" />
                            <span className="font-medium">আবেদন শুরুঃ</span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{formatDate(applyStart)}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="flex items-center space-x-3">
                            <Clock4 className="w-4 h-4" />
                            <span className="font-medium">আবেদনের শেষ তারিখঃ</span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{formatDate(deadline)}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="flex items-center space-x-3">
                            <Hourglass className="w-4 h-4 animate-pulse" />
                            <span className="font-medium">আবেদন শেষ হতেঃ</span>
                        </TableCell>
                        <TableCell className="text-right font-medium text-amber-600">{deadlineCountdown(deadline)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
