export {};

// Discriminated Unions

type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai): string {
  switch (order.type) {
    case "masala":
      return `Masala chai with spice level ${order.spiceLevel}`;

    case "ginger":
      return `Ginger chai with ${order.amount}g ginger`;

    case "elaichi":
      return `Elaichi chai with aroma level ${order.aroma}`;
  }
}

console.log(
  makeChai({
    type: "masala",
    spiceLevel: 5
  })
);

console.log(
  makeChai({
    type: "ginger",
    amount: 10
  })
);

console.log(
  makeChai({
    type: "elaichi",
    aroma: 8
  })
);