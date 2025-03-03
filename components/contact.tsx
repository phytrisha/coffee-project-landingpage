'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VisitorFormDialog() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email only on submit
    if (!email) {
      setEmailError("Bitte gib deine E-Mail Adresse ein.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Ungültige E-Mail-Adresse');
      return;
    } else {
      setEmailError(''); // Clear error if email is valid
    }

    try {
      const response = await fetch('/api/save-visitor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      setMessage(data.message || data.error);

      if (response.ok) {
          setEmail("");
          setName("");
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Ein Fehler ist aufgetreten.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="cursor-pointer">
          Jetzt anmelden
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-serif font-semibold text-[#D03900]">
            Jetzt anmelden
          </DialogTitle>
          <DialogDescription>
            Melde dich jetzt mit deinem Namen und deiner E-Mail Adresse an um als erstes von Neuigkeiten zu The Coffee Project zu erfahren!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-base">
              Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-base">
              E-Mail
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Deine E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Only set the email state on change
              required
            />
            {emailError && <p className="text-sm text-red-500">{emailError}</p>}
          </div>
          {message && <p className="text-sm text-center">{message}</p>}
        </form>
        <DialogFooter>
          <Button className="cursor-pointer" type="submit" onClick={handleSubmit}>
            Anmelden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}