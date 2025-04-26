export default function OverlayBox({ image, title, desc }) {
    return (
        <div className="relative w-full max-w-2xl md:max-w-7xl overflow-hidden group rounded-xl shadow-lg">
            <img
                src={image}
                alt={title}
                width={1100}
                height={500}
                className="w-full h-[450px] object-cover transform transition-transform duration-300 group-hover:scale-105"
            />

            {/* Slide-up text overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-[#72293F]/90 text-white px-6 py-4 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-center">{title}</h3>
                <p className="text-base text-center mt-2">{desc}</p>
            </div>
        </div>
    );
}
