export default function SkeletonProductCard() {
    return (
        <div className="animate-pulse flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="h-48 bg-gray-300 rounded-md" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
    );
}

