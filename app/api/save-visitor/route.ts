// app/api/save-visitor/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient'; // Adjust the import path if needed

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name und E-Mail sind erforderlich.' }, { status: 400 });
    }

    console.log(name)
    console.log(email)

    const { error } = await supabase.from('potential_customers').insert([{ name, email }]);

    if (error) {
      console.error('Error saving visitor:', error);
      return NextResponse.json({ error: 'Die Verbindung kann zur Zeit nicht hergestellt werden. Bitte versuche es später nochmal.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Deine Daten wurden erfolgreich gespeichert – Vielen Dank und bis bald!' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack trace:', error.stack);
    } else {
      console.error('Error details:', error);
    }
    return NextResponse.json({ error: 'Ein unerwarteter Fehler ist aufgetreten – das tut uns Leid. Probiere es bitte später nochmal.' }, { status: 500 });
  }
}