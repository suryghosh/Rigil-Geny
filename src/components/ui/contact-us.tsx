import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `At Rigil Geny, we believe in transforming possibilities into reality by delivering precision-engineered energy solutions. With a commitment to innovation and excellence, we empower industries to achieve accuracy, efficiency, and sustainability, paving the way for a smarter and greener future.`

export function ContactUs() {
    return (
        <div className="contactUs w-[100vw] bg-back px-4 py-6 justify-start flex flex-col gap-6 mb-3 mt-3">
            <h4 className="">
            <TextGenerateEffect
                words={words}
                duration={1}
                className="italic text-xl font-normal text-green-500"
            />


            </h4>
        

            <Link legacyBehavior href="/contact">
                <a className="mt-4 px-6 py-2 bg-white text-green-500 font-bold rounded shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out w-[10vw] text-center">
                    Contact Us
                </a>
            </Link>
        </div>
    );
}
