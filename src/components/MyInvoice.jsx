import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function MyInvoice({ invoiceNumber }) {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    async function fetchInvoiceData() {
      // 1 / 2 / INV-20301
      const response = await fetch(`/api/invoices/${invoiceNumber}`);
      const data = await response.json();
      setInvoiceData(data);
    }

    fetchInvoiceData();
  }, [invoiceNumber]);

  if (!invoiceData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Invoice #{invoiceData.number}</h1>
      <p>Amount: {invoiceData.amount}</p>
      <p>Date: {invoiceData.date}</p>
    </div>
  );
}

MyInvoice.propTypes = {
  invoiceNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default MyInvoice;
