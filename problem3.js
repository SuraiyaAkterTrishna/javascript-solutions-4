/* Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

 */

function oilPrice(dieselNeedLitres, petrolNeedLitres, octaneNeedLitres){
    const dieselPerLitrePrice = 114; 
    const petrolPerLitrePrice = 130;
    const octanePerLitrePrice = 135;

    const totalDieselCost = dieselNeedLitres * dieselPerLitrePrice;
    const totalPetrolCost = petrolNeedLitres * petrolPerLitrePrice;
    const totalOctaneCost = octaneNeedLitres * octanePerLitrePrice;

    const totalCost = totalDieselCost + totalPetrolCost + totalOctaneCost;
    return totalCost;

}
const carFuel = oilPrice(0, 2, 3);
console.log(carFuel);