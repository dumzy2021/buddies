import { Button } from "@/components/ui/button";
import { useSignUpContext } from "./signup-context";
import { Steps } from "@/constants";
import { useResendOtp } from "@/components/hooks/useAuth";

export const CheckMail = () => {
  const { setStep, email } = useSignUpContext();
  const { mutate, isPending } = useResendOtp();

  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 pt-8 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-32 pb-8">
      <div className="bg-white border border-[#DDE2E4] shadow-lg max-w-[30rem] mx-auto rounded-md p-6 sm:p-8 md:p-10 lg:p-12">
        <svg
          width="117"
          height="117"
          className="mx-auto"
          viewBox="0 0 117 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.7344 63.9844H5.48438C4.99953 63.9844 4.53454 63.7918 4.1917 63.4489C3.84886 63.1061 3.65625 62.6411 3.65625 62.1562C3.65625 61.6714 3.84886 61.2064 4.1917 60.8636C4.53454 60.5207 4.99953 60.3281 5.48438 60.3281H34.7344C35.2192 60.3281 35.6842 60.5207 36.0271 60.8636C36.3699 61.2064 36.5625 61.6714 36.5625 62.1562C36.5625 62.6411 36.3699 63.1061 36.0271 63.4489C35.6842 63.7918 35.2192 63.9844 34.7344 63.9844ZM36.5625 54.8438H18.2812C17.7964 54.8438 17.3314 54.6511 16.9886 54.3083C16.6457 53.9655 16.4531 53.5005 16.4531 53.0156C16.4531 52.5308 16.6457 52.0658 16.9886 51.7229C17.3314 51.3801 17.7964 51.1875 18.2812 51.1875H36.5625C37.0473 51.1875 37.5123 51.3801 37.8552 51.7229C38.198 52.0658 38.3906 52.5308 38.3906 53.0156C38.3906 53.5005 38.198 53.9655 37.8552 54.3083C37.5123 54.6511 37.0473 54.8438 36.5625 54.8438ZM38.3906 45.7031H29.25C28.7652 45.7031 28.3002 45.5105 27.9573 45.1677C27.6145 44.8248 27.4219 44.3598 27.4219 43.875C27.4219 43.3902 27.6145 42.9252 27.9573 42.5823C28.3002 42.2395 28.7652 42.0469 29.25 42.0469H38.3906C38.8755 42.0469 39.3405 42.2395 39.6833 42.5823C40.0261 42.9252 40.2188 43.3902 40.2188 43.875C40.2188 44.3598 40.0261 44.8248 39.6833 45.1677C39.3405 45.5105 38.8755 45.7031 38.3906 45.7031ZM73.9477 55.4287C74.2573 55.6492 74.6279 55.7677 75.008 55.7677C75.388 55.7677 75.7587 55.6492 76.0683 55.4287L105.574 35.5022C104.58 35.0066 103.486 34.744 102.375 34.7344H54.8438C53.6967 34.7399 52.5679 35.0221 51.5531 35.557L73.9477 55.4287ZM68.0245 55.0631L48.7927 37.9884C47.9715 39.1826 47.5317 40.5976 47.5312 42.0469L43.875 71.2969C43.887 72.6713 44.2862 74.0145 45.0267 75.1725L68.0245 55.0631Z"
            fill="#84919A"
          />
          <path
            d="M103.746 76.5984L103.764 76.5801L103.746 76.5984Z"
            fill="#84919A"
          />
          <path
            d="M79.2495 57.6225L78.1892 58.3172C77.2658 59.0232 76.134 59.4026 74.9717 59.3958C73.7599 59.392 72.5835 58.987 71.6262 58.2441L70.7853 57.5128L47.696 77.6222C48.755 78.2477 49.9581 78.5878 51.1878 78.6094H98.719C99.9438 78.6045 101.147 78.2833 102.211 77.677L79.2495 57.6225Z"
            fill="#84919A"
          />
          <path
            d="M108.426 37.9884V38.0067L108.444 37.9884H108.426Z"
            fill="#84919A"
          />
          <path
            d="M108.426 38.0067L82.3754 55.5019L104.88 75.1725C105.62 74.0145 106.019 72.6713 106.031 71.2969L109.688 42.0469C109.685 40.6037 109.245 39.1952 108.426 38.0067Z"
            fill="#84919A"
          />
        </svg>

        <h4 className="text-[#1D1D18] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          Check your mailbox !
        </h4>

        <p className="text-[#5B6871] text-[0.6rem] md:text-xs lg:text-sm text-center mt-2">
          We’ve sent an email to {email} with a an OTP to confirm your account.
          Check your inbox to activate your account.
        </p>

        <div className="mt-3 lg:mt-4 flex justify-center">
          <Button
            disabled={isPending}
            onClick={() => setStep(Steps.STEP_4)}
            type="button"
          >
            Confirm Email
          </Button>
        </div>

        <p className="text-[#5B6871] text-xs md:text-sm md:p-1 lg:p-2 mt-2 sm:mt-3 md:mt-5 lg:mt-7 xl:mt-8 text-center">
          Didn’t get the mail?{" "}
          <button
            onClick={() => mutate({ email })}
            disabled={isPending}
            className="text-[#FF8600] cursor-pointer"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};
