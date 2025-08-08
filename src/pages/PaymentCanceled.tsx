import React from "react";

const PaymentCanceled = () => {
  React.useEffect(() => {
    document.title = "Payment Canceled - Pet Insurance";
  }, []);
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <section className="max-w-xl w-full text-center">
        <h1 className="section-title mb-4">Payment Canceled</h1>
        <p className="section-subtitle">Your checkout was canceled. You can try again anytime.</p>
        <a href="/" className="btn-secondary mt-8 inline-block">Back to Home</a>
      </section>
    </main>
  );
};

export default PaymentCanceled;
