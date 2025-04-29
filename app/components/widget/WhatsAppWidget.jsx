const WhatsAppWidget = () => {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            <button
                onClick={handleClick}
                className="bg-green-500 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-green-600"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width="28"
                    className="animate-bounce"
                />

                <p className=" text-sm md:text-lg">Chat with Us</p>

            </button>
        </div>
    );
};

export default WhatsAppWidget;

