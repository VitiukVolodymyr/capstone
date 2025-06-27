'use client';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
  return (
    <div className="mx-[30px] my-auto flex w-[900px] justify-between">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
