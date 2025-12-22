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
  const [form, setForm] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    console.log('Signup data:', form);
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to access your account</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            name="userName"
            placeholder="User name"
            value={form.userName}
            onChange={(e) => {
              setForm({ ...form, userName: e.target.value });
            }}
            required
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            required
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            required
          />

          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
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
