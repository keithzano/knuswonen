import React from 'react';

export const NewsSection: React.FC = () => {
  const newsItems = [
    { id: 1, image: 'images/rectangle1.jpg', date: '5 maart 2024', title: 'Telefoonstoring', description: 'Update: Telefoonstoring verholpen', href: 'Lees meer' },
    { id: 2, image: 'images/rectangle2.jpg', date: '17 februari 2024', title: 'Energiebesparing', description: 'KnusWonen werkt hard aan het energiezuiniger maken van...', href: 'Lees meer' },
    { id: 3, image: 'images/rectangle3.jpg', date: '30 januari 2024', title: 'Energietoeslag', description: 'Steeds meer mensen hebben moeite om hun energierekening te...', href: 'Lees meer' },
  ];

  return (
    <section className=" w-full bg-indigo-300  p-6 md:p-16">
        <div className="container mx-auto max-w-[912px] space-y-6 ">
            <h3 className=' font-bold text-[32px] text-indigo-900 leading-10 ' >Laatste nieuws</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsItems.map(item=>(
                    <div key={item.id} className="max-w-full md:max-w-72 rounded-xl bg-white overflow-hidden shadow-lg">
                        <img className="w-full" src={item.image} alt={item.title}/>
                        <div className=" space-x-2 space-y-2 ">
                            <p className='text-neutral-400 font-semibold text-[11px] leading-4 mt-2 ml-2'>{item.date}</p>
                            <h3 className="font-bold text-xl leading-6 text-indigo-900 ">{item.title}</h3>
                            <p className="text-indigo-900 text-sm font-normal ">
                                {item.description}
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-end self-end p-2">
                            <span className=" text-indigo-900 mr-2">{item.href}</span>
                            <img src="images/arrow.png" alt="arrow" />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-end space-x-1'>
            <p className=' text-indigo-900 text-sm font-medium  text-right '>Bekijk alle nieuwsberichten </p>
            <img src="images/arrow.png" alt="arrow" />
            </div>
            
        </div>
    </section>
  );
};