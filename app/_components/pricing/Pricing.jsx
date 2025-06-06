import BtnLogin from "../Hero/BtnLogin";
import ListItem from "./ListItems";

const pricingFeaturesList = [
  "Collect customer feedback",
  "Unlimited boards",
  "Admin dashboard",
  "24/7 support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-base-200">
      <div className="py-32 px-8 max-w-4xl mx-auto">
        <p className="mb-4 text-sm uppercase font-medium text-center text-primary">
          Pricing
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          A pricing that adapts to your needs
        </h2>

        <div className="mx-auto p-8 bg-base-100 rounded-3xl w-96 space-y-6">
          <div className="flex gap-x-2 items-baseline">
            <div className="text-4xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-60">
              /month
            </div>
          </div>
          <ul className="space-y-2">
            {pricingFeaturesList.map((text, index) => (
              <ListItem key={index}>{text}</ListItem>
            ))}
          </ul>

          <BtnLogin isLoggedIn={true} name="EMMA" extraStyle="w-full" />
        </div>
      </div>
    </section>
  );
}
