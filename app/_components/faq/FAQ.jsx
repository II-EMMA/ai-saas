import FAQListItem from "./FAQListItem";

const FAQItemsList = [
  { question: "What do I get exactly?", answer: "Loreum Ipseum" },
  { question: "Can I get a refund?", answer: "Loreum Ipseum" },
  { question: "I have another question?", answer: "Loreum Ipseum" },
];
export default function FAQ() {
  return (
    <section id="FAQ" className="bg-base-200">
      <div className="py-32 px-8 max-w-4xl mx-auto">
        <p className="mb-4 text-sm uppercase font-medium text-center text-primary">
          FAQ
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <ul className="max-w-lg mx-auto">
          {FAQItemsList.map((qa, index) => (
            <FAQListItem key={index} qa={qa} />
          ))}
        </ul>
      </div>
    </section>
  );
}
