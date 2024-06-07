"use client"

import { Meteors } from "@/components/ui/meteors"

export default function page() {
    return (
            <div className="bg-gray-900 h-auto md:h-[44rem] w-full rounded-md flex flex-col
        items-center justify-center relative overflow-hidden
         mx-auto py-10 md:py-0">
            <Meteors />
            
                <div className="md:mt-[10rem] p-4 relative z-10 w-full text-center">
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
                bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Contact us</h1>
                    <p
                        className="mt-4 font-thin text-base md:text-lg text-neutral-300 max-w-xl mx-auto justify-center text-center"
                    >We are here to help you with any questions regarding our courses, programs, or events. Reach our and let us
                        know how we can assist you in your musical journey.
                    </p>

                    <form className="mt-10 max-w-2xl mx-auto">

                        <div className="mb-4">
                            <input type="email" id="email" placeholder="Your Email Address" name="email" required className="shadow bg-black rounded-lg w-full py-2 px-3 h-[3rem] text-neutral-300 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-6">
                            <textarea id="message" name="message" placeholder="Your Message" required className="shadow appearance-none bg-black rounded-lg w-full py-2 px-3 text-neutral-300 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"></textarea>
                        </div>
                        <div className="flex">
                            <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
                        </div>
                    </form>
                </div>

            </div>

    )
}