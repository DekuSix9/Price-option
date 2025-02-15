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
        "Limited cardio machines",
        "No access to group classes",
        "Open gym access (Off-peak hours only)"
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
        "Access to group workout sessions",
        "Cardio & strength training equipment",
        "Access to stretching & warm-up zone",
        "Discount on gym merchandise (5%)",
        "Shower facility"
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
        "Group classes & yoga sessions",
        "Priority customer support",
        "HIIT & functional training zone",
        "Towel service included",
        "Discount on gym merchandise (10%)",
        "Nutritional counseling",
        "Massage & recovery sessions"
      ]
    },
    {
      "id": 4,
      "name": "Elite",
      "price": 8000,
      "features": [
        "24/7 gym access",
        "Dedicated personal trainer",
        "Advanced customized diet & meal planning",
        "Private training sessions",
        "Exclusive VIP lounge access",
        "Unlimited sauna, steam & jacuzzi",
        "Premium locker & towel service",
        "Access to all fitness classes (Yoga, Zumba, HIIT, etc.)",
        "Physiotherapy & injury recovery support",
        "Free supplements (monthly supply)",
        "Early access to gym events & workshops",
        "Discount on gym merchandise (15%)",
        "VIP parking space"
      ]
    }
  ];

  return (
    <div>
      <h2 className=" text-4xl">Best Prices in Town</h2>
      <ul>
        {priceOptions.map(option => (
          <PriceOption key={option.id} option={option} />
        ))}
      </ul>
    </div>
  );
};

export default PriceOptions;
