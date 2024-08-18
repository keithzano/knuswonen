export const ImprovementSection: React.FC = () => {
    return(
        <section className=" flex full-width mx-auto overflow-hidden md:min-h-[500px] ">

            <div className="container max-w-6xl mx-auto  bg-[url('/images/ImprovementSectionBackground.png')] bg-no-repeat bg-left-top p-5 md:p-16 md:mt-6 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1020px] mx-auto gap-6">
                    <div className=" ">
                    <img src="/images/improvement.png" alt="Improvent section image" />
                </div>
                <div className=" space-y-6">
                    <h3 className="font-bold text-sky-400 text-[32px] leading-10 "> We verbeteren onze woningen  </h3>
                    <p className=" text-base text-black font-normal leading-6 " >
                       Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                    </p>
                    <p className=" text-base text-black font-normal leading-6 " >
                        Wilt u meer weten over onze energiebesparende maatregelen?
                    </p>
                    <button className=" text-base font-medium leading-6 text-white bg-gradient-to-r from-lime-300 to-sky-400 py-2 px-6  rounded-lg">
                        Lees meer
                    </button>
                </div>
                </div>
            </div>

        </section>
    )
}