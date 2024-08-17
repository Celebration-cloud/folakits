import { useRef, useState } from "react";
import { sendEmail } from "../../store/actions/userActions";

const ContactComponent = () => {
  const [loading, setLoading] = useState(false)
  const form = useRef();
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 bg-background text-foreground">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <div className="mb-4">
          <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full">
            Contact
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Contact with us</h1>
        <h2 className="text-2xl font-semibold mb-4">Our Headquarters</h2>
        <p className="mb-4">
          Level 13, 2 Elizabeth St,
          <br />
          Melbourne, Victoria 3000,
          <br />
          Australia
        </p>
        <p className="flex items-center mb-2">
          <img
            aria-hidden="true"
            alt="phone-icon"
            src="https://openui.fly.dev/openui/24x24.svg?text=📞"
            className="mr-2"
          />
          +61 (0) 3 8376 6284
        </p>
        <p className="flex items-center mb-4">
          <img
            aria-hidden="true"
            alt="email-icon"
            src="https://openui.fly.dev/openui/24x24.svg?text=✉️"
            className="mr-2"
          />
          noreply@envato.com
        </p>
        <p className="flex items-center">
          <img
            aria-hidden="true"
            alt="clock-icon"
            src="https://openui.fly.dev/openui/24x24.svg?text=⏰"
            className="mr-2"
          />
          Monday - Sunday:
          <br />
          06:00 AM - 10:00 PM
        </p>
      </div>
      <div className="md:w-1/2 bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Have a question? Write to us!
        </h2>
        <form ref={form} onSubmit={(e) => sendEmail(e, form, set)}>
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              placeholder="Full name*"
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="user_phone"
              placeholder="Phone*"
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              placeholder="E-mail address*"
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your message..."
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80"
          >
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
