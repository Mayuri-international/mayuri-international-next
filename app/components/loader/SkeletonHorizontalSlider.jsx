export default function SkeletonHorizontalSlider() {
    return (
        <div className="flex space-x-4 overflow-x-auto p-4">
            {[...Array(5)].map((_, idx) => (
                <div key={idx} className="animate-pulse flex flex-col space-y-2">
                    <div className="h-24 w-24 bg-gray-300 rounded-full" />
                    <div className="h-4 bg-gray-300 rounded w-20 mx-auto" />
                </div>
            ))}
        </div>
    );
}

