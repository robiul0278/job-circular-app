// components/categories-skeleton.tsx

const CategoriesSkeleton = () => {
  return (
    <div className="space-y-3 border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
      <h4 className="font-semibold text-sm uppercase flex items-center dark:text-gray-100 p-2">
        {/* Skeleton block for heading */}
        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded h-5 w-32" />
      </h4>

      <div className="space-y-2">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-lg p-2"
          >
            {/* Skeleton block for category text */}
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded h-4 w-40" />
            {/* Skeleton block for badge */}
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded h-5 w-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
