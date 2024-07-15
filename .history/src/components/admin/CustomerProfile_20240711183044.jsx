/* eslint-disable react/prop-types */
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function CustomerProfile({setOpen, details}) {
  return (
    <div className="container">
      <KeyboardBackspaceIcon onClick={() => setOpen(false)} />
      <div className="max-w-sm mx-auto bg-card text-card-foreground rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src="https://placehold.co/96x96"
            alt="User profile picture"
          />
          <h2 className="mt-4 text-lg font-semibold">{details.name}</h2>
          <p className="text-muted-foreground">CEO, Brack Ltd.</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email</span>
            <div>
              <span>{details.email}</span>
              <span className="ml-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                Email Verified
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Phone</span>
            <span>{+1 439 327 546}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Country</span>
            <span>USA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">State/Region</span>
            <span>New York</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Address 1</span>
            <span>Street Tailwood, No. 17</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile
