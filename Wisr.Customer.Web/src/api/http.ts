import { CustomerResponse, CustomerResponseAccount } from "./customer";

export const getCustomer = () => {
  return httpFetch(null, () => customer);
};

export const updateCustomer = (updates: {
  firstName: string;
  lastName: string;
}) => {
  return httpFetch(updates, (u) => {
    customer.firstName = u.firstName;
    customer.lastName = u.lastName;

    return customer;
  });
};

function httpFetch<R, T>(request: R, response: (d: R) => T): Promise<T> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject("500 Unexpected server error");
      } else {
        const result = response(request);
        resolve(result);
      }
    }, 300)
  );
}

var accounts: CustomerResponseAccount[] = [
  { name: "Jay Doe", provider: "ING SuperCard", balance: 1000, open: false },
  { name: "Jay Doe", provider: "Macquarie Black Card", balance: 10000, open: true },
  { name: "Jay Doe & Day Joe", provider: "Predatory Loans: Payday", balance: 20000, open: false },
  { name: "Jay Doe & Day Joe", provider: "Commonwealth Bank Yellow Card", balance: 5000, open: true },
];
var customer: CustomerResponse = {
  id: 5433,
  firstName: "Jay",
  lastName: "Doe",
  accounts,
};
