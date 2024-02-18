import SignUpForm from "@/components/SignUpForm/SignUpForm";
import Input from "@/components/Input/Input";

export default function Signup() {
  return (
    <>
      <>
        <SignUpForm>
          <Input isSignIn={false} />
        </SignUpForm>
      </>
    </>
  );
}
