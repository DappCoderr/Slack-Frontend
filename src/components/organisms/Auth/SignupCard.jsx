import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const SignUpCard = () => {
  const [signupForm, setSignupForm] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    console.log('Signup data:', signupForm);
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-lg">Sign Up</CardTitle>
        <CardDescription>Sign up to access your account</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            name="userName"
            placeholder="User name"
            value={signupForm.userName}
            onChange={(e) => {
              setSignupForm({ ...signupForm, userName: e.target.value });
            }}
            required
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={signupForm.email}
            onChange={(e) => {
              setSignupForm({ ...signupForm, email: e.target.value });
            }}
            required
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={signupForm.password}
            onChange={(e) => {
              setSignupForm({ ...signupForm, password: e.target.value });
            }}
            required
          />

          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={signupForm.password}
            onChange={(e) => {
              setSignupForm({ ...signupForm, password: e.target.value });
            }}
            required
          />

          <Button type="submit" size="lg" className="w-full">
            Continue
          </Button>
        </form>

        <Separator className="my-5" />

        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <span className="hover:underline text-sky-600 cursor-pointer">
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
