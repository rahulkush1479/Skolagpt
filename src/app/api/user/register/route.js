import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import AdminModel from '@/models/AdminModel';

export async function POST(req) {
  try {
    const { name, email, phone, password } = await req.json();
    if (!name || !email || !phone || !password)
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });

    await dbConnect();

    const exists = await AdminModel.findOne({ email });
    if (exists)
      return NextResponse.json({ message: 'Admin already exists.' }, { status: 409 });

    const hash = await bcrypt.hash(password, 10);
    const admin = await AdminModel.create({ name, email: email.toLowerCase(), phone, password: hash });

    return NextResponse.json({ message: 'Admin created.' }, { status: 201 });
  } catch (err) {
    console.error('Error creating admin:', err);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}
