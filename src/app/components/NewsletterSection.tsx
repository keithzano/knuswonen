export const NewsletterSection = () => {
    return(
        <section className=" flex full-width mx-auto overflow-hidden md:min-h-[500px] ">

            <div className="container max-w-6xl mx-auto  bg-[url('/images/NewsletterSectionBackground.png')] bg-no-repeat bg-right-bottom p-5 md:p-16 md:mt-6 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1020px] mx-auto gap-6">
                    
                    <div className=" space-y-6">
                        <h3 className=" text-orange-500 text-[32px] font-bold leading-10 "> We verbeteren onze woningen  </h3>
                        <p className=" text-black text-base font-normal">
                           Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist. 
                        </p>
                        <p className=" text-black text-base font-normal">
                            Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
                        </p>
                        <button className=" bg-gradient-to-r from-orange-500 to-yellow-400 py-2 px-6 rounded-lg ">
                           Inschrijven 
                        </button>
                    </div>
                    <div className=" ">
                        <img src="/images/newsletter.png" alt="Improvent section image" />
                    </div>
                </div>
            </div>

        </section>
    )
}