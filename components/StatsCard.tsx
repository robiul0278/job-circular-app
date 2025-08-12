import { JobCategories } from "@/lib/api";

const StatsCard = async () => {
    const { activeJobCount,todayJobCount,deadlineTodayCount,deadlineIn3Days } = await JobCategories();
  return (
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="bg-green-800 text-white rounded-lg p-3 text-center flex justify-between items-center">
                            <p className="text-base sm:text-lg font-bold">{activeJobCount}</p>
                            <p className="text-xs sm:text-sm font-medium">Live Jobs</p>
                        </div>
                        <div className="bg-green-800 text-white rounded-lg p-3 text-center flex justify-between items-center">
                            <p className="text-base sm:text-lg font-bold">{todayJobCount}</p>
                            <p className="text-xs sm:text-sm font-medium">Posted Today</p>
                        </div>
                        <div className="bg-green-800 text-white rounded-lg p-3 text-center flex justify-between items-center">
                            <p className="text-base sm:text-lg font-bold">{deadlineTodayCount}</p>
                            <p className="text-xs sm:text-sm font-medium">Deadline Today</p>
                        </div>
                        <div className="bg-green-800 text-white rounded-lg p-3 text-center flex justify-between items-center">
                            <p className="text-base sm:text-lg font-bold">{deadlineIn3Days}</p>
                            <p className="text-xs sm:text-sm font-medium">Expires in 3 days</p>
                        </div>
                    </div>
  )
}

export default StatsCard;