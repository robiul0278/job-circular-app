import { Clock4, Hourglass} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { deadlineCountdown, formatDateTime } from "@/utils/format-date";


export default async function JobCircularTimeTable({deadline}:{deadline: string}) {
    return (
<div className="">
  <Table>
    <TableBody>
      <TableRow>
        <TableCell className="flex items-center space-x-1 px-0 py-1">
          <Clock4 className="w-4 h-4" />
          <span>আবেদনের শেষ তারিখঃ</span>
        </TableCell>
        <TableCell className="text-right px-0 py-1">{formatDateTime(deadline)}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="flex items-center space-x-1 px-0 py-1">
          <Hourglass className="w-4 h-4 animate-pulse" />
          <span>আবেদন শেষ হতেঃ</span>
        </TableCell>
        <TableCell className="text-right text-amber-600 px-0 py-1">
          {deadlineCountdown(deadline)}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>


    );
}
