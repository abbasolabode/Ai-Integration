import React from 'react'
import { CiMail, CiPhone } from 'react-icons/ci'
import { SlSocialLinkedin } from 'react-icons/sl'

export default function CareerBody() {
    return (
        <section className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm mt-12">
            <h2 className="font-bold text-xl mb-6">Contact Our COO</h2>
            <div className="flex flex-col space-y-2 justify-center text-center items-center mx-auto border pt-4 border border-stone-200 rounded-lg">
                <figure>
                    <img
                        className="rounded-full w-28 h-28 object-cover"
                        src="/images/avatar-love.png"
                        alt="Love Anderberg, COO"
                    />
                </figure>
                <div className="flex flex-col space-y-1 pt-3 py-4 ">
                    <p className="font-semibold text-lg">Love Anderberg</p>
                    <p className="text-gray-500 mb-4">COO</p>
                    <div className="space-y-3 text-gray-700 flex flex-col ">
                        <a
                            href="mailto:love@wrlds.com"
                            className="inline-flex items-center gap-2 hover:text-blue-600"
                        >
                            <CiMail />
                            love@wrlds.com
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 hover:text-blue-600"
                        >
                            <SlSocialLinkedin />
                            Linkedin Profile
                        </a>
                        <p className="inline-flex items-center gap-2">
                            <CiPhone />
                            +234-7065560628
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
