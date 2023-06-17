"use client";

import checkout from "../../checkout";

const products = [
  {
    id: 1,
    name: "Basic Cleaning Package",
    href: "#",
    price: "$1",
    description:
      "General dusting and surface cleaning. Vacuuming and mopping floors. Cleaning and sanitizing bathrooms. Wiping down kitchen countertops and appliances. Emptying trash bins.",
  },
  // More products...
];

export default function Pricing() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Please select one:
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 text-black">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                {product.name}:{product.description}
                <div />
              </div>
              <div className="mt-4 flex justify-between bg-white">
                <div />
              </div>
              <div className="text-center">
                <button
                  onClick={() => {
                    checkout({
                      lineItems: [
                        {
                          price: "price_1NGO5wDptCQNn1lugs6HKNL9",
                          quantity: 1,
                        },
                      ],
                    });
                  }}
                  type="button"
                  className="py-2 px-4 text-sm font-medium text-gblack rounded-full border border-amber-600"
                >
                  {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
