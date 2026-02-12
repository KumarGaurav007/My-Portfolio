function Loader() {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md bg-black/30">

            <div className="relative flex items-center justify-center">

                {/* rotating ring */}
                <div className="w-20 h-20 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>

                {/* center text */}
                <span className="absolute text-xl font-semibold tracking-wider text-white">
                    GK<span className="text-primary">•</span>
                </span>

            </div>

        </div>
    );
}

export default Loader;
