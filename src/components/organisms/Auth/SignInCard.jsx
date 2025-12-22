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
import React, { useState } from 'react';

const SignInCard = () => {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">SignIn</CardTitle>
        <CardDescription>Sign In to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={signInForm.email}
            onChange={(e) => {
              setSignInForm({ ...signInForm, email: e.target.value });
            }}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={signInForm.password}
            onChange={(e) => {
              setSignInForm({ ...signInForm, password: e.target.value });
            }}
            required
          />
          <Button type="submit" size="lg" className="w-full">
            Continue
          </Button>
        </form>
        <Separator className="my-5" />

        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <span className="hover:underline text-sky-600 cursor-pointer">
            Sign up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
