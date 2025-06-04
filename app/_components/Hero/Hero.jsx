import BtnLogin from "./BtnLogin";
import Header from "./header/Header";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="mx-auto text-center py-32 px-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">
          Collect customer feedback to build better products
        </h1>
        <p className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love
        </p>
        <BtnLogin isLoggedIn={false} name="EMMA" />
      </section>
    </>
  );
}
