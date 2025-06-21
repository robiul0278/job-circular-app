import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { VIEW_BY_ID_QUERY } from "@/sanity/lib/query";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
    const data = await client.withConfig({ useCdn: false }).fetch(VIEW_BY_ID_QUERY, { id });
    const totalViews = data?.views ?? 0;

    await writeClient
        .patch(id)
        .set({views: totalViews + 1})
        .commit();

    return (
        <div className="absolute bottom-2 left-2 bg-pink-100 backdrop-blur-md shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 border border-gray-200 ">
            <div className="absolute -top-1 -right-1">
                <Ping />
            </div>
            <div className="w-full flex justify-center items-center gap-1">
                <p className="text-sm font-semibold text-gray-800">
                    {totalViews.toLocaleString()}
                </p>
                <p className="text-sm text-gray-800">views</p>
            </div>

        </div>
    );
};

export default View;
