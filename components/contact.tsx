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
import { Loader2 } from "lucide-react"; // Import a loading icon

export default function VisitorFormDialog() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Added loading state

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Bitte gib deine E-Mail Adresse ein.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Ungültige E-Mail-Adresse');
      return;
    } else {
      setEmailError('');
    }

    setIsLoading(true); // Set loading to true
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
        setEmail('');
        setName('');
        setSubmissionSuccess(true);
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Ein Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setSubmissionSuccess(false);
      setMessage("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="cursor-pointer">
          Jetzt anmelden
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {submissionSuccess ? (
            <DialogTitle className="text-2xl md:text-3xl font-serif font-semibold text-[#D03900]">
              Anmeldung erfolgreich
            </DialogTitle>
          ) : (
            <DialogTitle className="text-2xl md:text-3xl font-serif font-semibold text-[#D03900]">
              Jetzt anmelden
            </DialogTitle>
          )}
          {!submissionSuccess && (
            <DialogDescription>
              Melde dich jetzt mit deinem Namen und deiner E-Mail Adresse an um als erstes von Neuigkeiten zu The Coffee Project zu erfahren!
            </DialogDescription>
          )}
        </DialogHeader>
        {!submissionSuccess && (
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p className="text-sm text-red-500">{emailError}</p>}
            </div>
          </form>
        )}
        <DialogFooter>
          {!submissionSuccess && (
            <Button className="cursor-pointer" type="submit" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Anmeldung läuft...
                </>
              ) : (
                'Anmelden'
              )}
            </Button>
          )}
          {submissionSuccess}
          {message && <p className="text-sm text-center">{message}</p>} {/* Always show the message */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}