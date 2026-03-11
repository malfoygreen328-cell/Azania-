import { useState } from "react";

const VendorSignup = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-[#F5F7F6] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">

        <h2 className="text-2xl font-bold text-[#004225] mb-6 text-center">
          Become an Azania Vendor
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h3 className="font-semibold mb-4">Account Information</h3>

            <input className="input" placeholder="Full Name" />
            <input className="input mt-3" placeholder="Email" />
            <input className="input mt-3" type="password" placeholder="Password" />
            <input className="input mt-3" placeholder="Phone Number" />

            <button onClick={nextStep} className="btn-primary mt-6 w-full">
              Continue
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h3 className="font-semibold mb-4">Business Details</h3>

            <input className="input" placeholder="Registered Business Name" />
            <input className="input mt-3" placeholder="Registration Number" />
            <input className="input mt-3" placeholder="Tax Number (Optional)" />
            <input className="input mt-3" placeholder="Business Type" />

            <div className="flex gap-3 mt-6">
              <button onClick={prevStep} className="btn-secondary w-full">
                Back
              </button>
              <button onClick={nextStep} className="btn-primary w-full">
                Continue
              </button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h3 className="font-semibold mb-4">Upload Required Documents</h3>

            <label className="block mb-2">Business Registration Certificate</label>
            <input type="file" className="file-input mb-3" />

            <label className="block mb-2">Director ID Copy</label>
            <input type="file" className="file-input mb-3" />

            <label className="block mb-2">Proof of Address</label>
            <input type="file" className="file-input mb-3" />

            <div className="flex gap-3 mt-6">
              <button onClick={prevStep} className="btn-secondary w-full">
                Back
              </button>
              <button className="btn-primary w-full">
                Submit Application
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default VendorSignup;