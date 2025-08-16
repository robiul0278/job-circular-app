import { Clock4, Hourglass} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { deadlineCountdown, formatDate } from "@/utils/format-date";


export default async function JobCircularTimeTable({deadline}:{deadline: string}) {
    return (
        <div className="mt-2">
            <h3 className="flex items-center font-semibold text-gray-900 dark:text-gray-100">
                সার্কুলার সময়সূচীঃ
            </h3>

            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="flex items-center space-x-3">
                            <Clock4 className="w-4 h-4" />
                            <span >আবেদনের শেষ তারিখঃ</span>
                        </TableCell>
                        <TableCell className="text-right font-medium">{formatDate(deadline)}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="flex items-center space-x-3">
                            <Hourglass className="w-4 h-4 animate-pulse" />
                            <span >আবেদন শেষ হতেঃ</span>
                        </TableCell>
                        <TableCell className="text-right text-amber-600">{deadlineCountdown(deadline)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
