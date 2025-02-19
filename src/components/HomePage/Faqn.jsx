
const Faqn = () => {
    return (
        <div className="w-[90%] mx-auto my-10">
            <h1 className="font-bold text-2xl my-6  text-center">Frequently Asked Questions (FAQs)</h1>
          <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-medium">
            1. How do I book an apartment?
            </div>
            <div className="collapse-content text-sm">
              <p>
              Navigate to the Apartment page.
Click on the "Agreement" button.
Your request will be sent to the Admin for approval.
Once the Admin approves your request, you can proceed with the payment.
After a successful payment, you will officially become a member, and the apartment will be booked under your name.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
            2. How do I use a coupon for discounts?         </div>
            <div className="collapse-content  text-sm">
              <p>
              Visit the Homepage to check for active coupons.
Before making a payment, enter the coupon code in the payment section.
The discount will be applied automatically before completing the transaction.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-2 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg font-medium">
            3.  What payment methods are available?          </div>
            <div className="collapse-content  text-sm">
              <p>
              We use Stripe as our payment gateway. For testing purposes, use the following test card details: <br />

Card Number: 4242 4242 4242 4242<br />
Expiry Date: Any valid future date (e.g., 12/34)<br />
CVC: Any three-digit number (four digits for American Express)<br />
Other fields: Any random values
              </p>
            </div>
          </div>
         
        </div>
      );
};

export default Faqn;