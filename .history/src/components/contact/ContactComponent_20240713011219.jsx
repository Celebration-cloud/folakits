
const contactInfoStyle = {
 width: "30%",
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#f2f2f2",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  // Add more styles as needed
};

const messageFormStyle = {
    justifySelf: "center",
    width: "100%",
  display: "inline-flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  // Add more styles as needed
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid black",
  backgroundColor: "white",
  color: "black",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  cursor: "pointer",
};

const ContactComponent = () => {
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
      <div className="md:w-1/2 bg-card p-0 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Have a question? Write to us!
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name*"
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone*"
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail address*"
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message..."
              className="w-full p-3 border border-input rounded-lg bg-background text-foreground h-32"
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
