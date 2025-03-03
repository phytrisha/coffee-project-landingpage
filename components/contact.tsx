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
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        setOpen(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className='cursor-pointer'>Jetzt anmelden</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-serif font-semibold text-[#D03900]">Jetzt anmelden</DialogTitle>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="text-sm text-center">{message}</p>}
        </form>
        <DialogFooter>
          <Button className='cursor-pointer' type="submit" onClick={handleSubmit}>
            Anmelden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}