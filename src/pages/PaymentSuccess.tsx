import React from "react";

const PaymentSuccess = () => {
  React.useEffect(() => {
    document.title = "Payment Success - Pet Insurance";
  }, []);
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <section className="max-w-xl w-full text-center">
        <h1 className="section-title mb-4">Payment Successful</h1>
        <p className="section-subtitle">
          Thank you! Your payment was processed. A confirmation email has been sent.
        </p>
        <a href="/" className="btn-primary mt-8 inline-block">Return Home</a>
      </section>
    </main>
  );
};

export default PaymentSuccess;
