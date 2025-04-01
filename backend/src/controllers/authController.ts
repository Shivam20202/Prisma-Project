import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';
import { loginSchema } from '../schemas/auth';

export const login = async (req: Request, res: Response) => {
  try {
   
    const validation = loginSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ 
        message: 'Invalid input data', 
        errors: validation.error.errors 
      });
    }

    const { email, password } = validation.data;

    
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {

      const hashedPassword = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: { email, password: hashedPassword },
      });

      return res.status(201).json({
        message: 'User registered successfully',
        user: { email: user.email },
      });
    }

 
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }


    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { email: user.email },
    });

  } catch (error) {
    console.error('Login/Register error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
