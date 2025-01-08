import Link from "next/link";

export function ContactUs() {
    return (
        <div className="contactUs w-[100vw] bg-green-500 px-4 py-6 justify-start flex flex-col gap-6 mb-3 mt-3">
            <h2 className="text-4xl text-white font-semibold">Interested?</h2>
            <h1 className="text-8xl font-bold text-white">Work with us!</h1>
            <h4 className="text-white text-xl">Contact us for further details</h4>

            <Link legacyBehavior href="/contact">
                <a className="mt-4 px-6 py-2 bg-white text-green-500 font-bold rounded shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out w-[10vw] text-center">
                    Contact Us
                </a>
            </Link>
        </div>
    );
}
