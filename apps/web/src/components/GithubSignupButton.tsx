import { signIn } from 'next-auth/react';
import Image from "next/image";

export default function GithubSignupButton() {
  const handleSignup = () => {
    signIn('github'); // Replace 'github' with the provider you want to use
  };

  return (
    <div className='flex flex-row gap-3'>
        <Image  
        height="24" 
        width="24" 
        id="provider-logo-dark" 
        src="https://authjs.dev/img/providers/github.svg" 
        alt={'github logo'} 
        />

        <button 
        onClick={handleSignup}>
            Sign up with Github {/* Change the text and style as needed */}
        </button>

    </div>
  );
}


