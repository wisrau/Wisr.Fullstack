import React from "react";
import "./app.css";
import { getCustomer, updateCustomer } from "./api/http";
import { parseForm } from "./form-helper";
import { Account } from "./components/account";
import { Modal } from "./components/modal";

export const App: React.FunctionComponent = () => {
  const [error, setError] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(true);
  getCustomer().then((customer) => console.log("Load", customer));

  return (
    <section className="profile">
      <div>
        <h1><span>[😎]</span> Your profile <span>[😎]</span></h1>

        <form onSubmit={submit}>
          {error && <div className="form-error">{error}</div>}

          <input name="firstName" placeholder="First name" required />
          <input name="lastName" placeholder="Last name" required />

          <button onClick={submitClick} type="submit">
            Save
          </button>
        </form>
      </div>
    </section>
  );

  function submitClick(e: React.MouseEvent<HTMLButtonElement>) {
    setError("");
    const isValid = e.currentTarget.form?.checkValidity();
    if (!isValid) {
      setError("Please fill out all required fields");
      e.preventDefault();
    }
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = parseForm(e.currentTarget);
    console.log("Submit", formData);
    /***
     * There is a method named updateCutomer which has the folloing typing:
     * updateCustomer(customerChanges: { firstName: string; lastName: string }) => Promise<CustomerResponse>;
     */
  };
};
