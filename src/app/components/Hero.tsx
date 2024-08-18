export  const Hero: React.FC = () => {
    return (
      <section className="flex w-full mx-auto min-h-[550px] overflow-hidden bg-[url('/images/HeroBackground.png')] bg-no-repeat bg-fill bg-center">
        <div className="container mx-auto p-5 flex flex-col justify-end">
          <div className="max-w-[912px] mx-auto w-full space-y-6">
            <h2 className=" font-medium text-2xl leading-9 text-white ">Waarmee kunnen we je helpen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="bg-white md:max-w-72 text-indigo-900 text-lg font-semibold leading-7 py-2 px-4 rounded-xl inline-flex items-center justify-center md:justify-start gap-3">
               <img src="images/HammerIcon.png" alt=" hammer icon" /> 
                <span>Reparatie melden</span>
              </button>
             
             <button className="bg-white md:max-w-72 text-indigo-900 text-lg font-semibold leading-7 py-2 px-4 rounded-xl inline-flex items-center justify-center md:justify-start gap-3" >
               <img src="images/HandDepositIcon.png" alt=" Hand Deposit Icon" /> 
                <span>Huur betalen</span>
              </button>
  
              <button className="bg-white md:max-w-72 text-indigo-900 text-lg font-semibold leading-7 py-2 px-4 rounded-xl inline-flex items-center justify-center md:justify-start gap-3" >
               <img src="images/ChatsCircle.png" alt=" Chats Circlehammer icon" /> 
                <span>Contact</span>
              </button>
  
            </div>
          </div>
        </div>
      </section>
    )
  }