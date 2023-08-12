// Good Luck 💪🏾
  function mostExpensive(jewellery) {
    let maxPrice = 0;
    let maxjewellery = "";
  
    for (let piece in jewellery) {
      if (jewellery[piece] > maxPrice) {
        maxPrice = jewellery[piece];
        maxjewellery = piece;
      }
    }
  
    return `The most expensive one is the ${maxjewellery}`;
  }
  
  const j1 = {
    "Diamond Earrings": 1180,
    "Gold Watch": 210,
    "Pearl Necklace": 737
  };
  console.log(mostExpensive(j1));
  
  const j2 = {
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  };
  console.log(mostExpensive(j2));
  
  