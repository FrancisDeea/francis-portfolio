"use client";

import { authenticate } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Spinner from "../skeletons/dashboard/Spinner";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="ct-flex-col w-full max-w-80 rounded-md p-4 bg-opposite/10 font-medium"
    >
      <input
        className="rounded-sm p-1"
        type="email"
        name="email"
        required
        placeholder="Enter Email"
      />
      <input
        className="rounded-sm p-1"
        type="password"
        name="password"
        minLength={6}
        required
        placeholder="Enter Password"
      />
      <LoginButton />
      <div className="flex h-4" aria-live="polite" aria-atomic="true">
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="rounded-sm h-8 p-1 bg-medium/80 text-center flex justify-center items-center"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? (
        <svg
          className="text-center"
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            fill="currentColor"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      ) : (
        "Log in"
      )}
    </button>
  );
}
