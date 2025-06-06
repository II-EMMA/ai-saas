import BtnLogin from "./BtnLogin";
import Header from "../header/Header";
import Image from "next/image";
import productDemo from "@/public/assets/productDemo.jpeg";

export default function Hero() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="flex lg:text-left items-center lg:items-start flex-col lg:flex-row mx-auto text-center py-32 px-8 max-w-3xl gap-y-14">
        <Image src={productDemo} alt="hero" className="w-96 rounded-xl" />

        <div>
          <h1 className="text-4xl font-bold mb-6">
            Collect customer feedback to build better products
          </h1>
          <p className="opacity-90 mb-10">
            Create a feedback board in minutes, prioritize features, and build
            products your customers will love
          </p>
          <BtnLogin isLoggedIn={true} name="EMMA" />
        </div>
      </section>
    </>
  );
}
