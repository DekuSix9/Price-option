import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 1500,
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Free drinking water",
        "No personal trainer",
       
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 3000,
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Personal trainer (5 sessions/month)",
        "Basic diet plan",
       
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 5000,
      "features": [
        "Unlimited gym access",
        "Personal trainer (unlimited sessions)",
        "Customized diet plan",
        "Sauna & steam room access",
       
      ]
    },
   
  ];

  return (
    <div className=" m-12">
      <h2 className=" md:text-4xl text-center mb-8 font-extrabold">Best Prices in Town</h2>
     
       <div className=" grid md:grid-cols-3 gap-6">
       {priceOptions.map(option => (
          <PriceOption key={option.id} option={option} />
        ))}
       </div>
     
    </div>
  );
};

export default PriceOptions;
