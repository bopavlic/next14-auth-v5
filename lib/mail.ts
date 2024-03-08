import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'no-reply@next14-auth-v5.com',
    to: email,
    subject: 'Please verify your email',
    html: `
      <p>Click the link below to verify your email</p>
      <a href="${confirmLink}">Verify</a>
    `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'no-reply@next14-auth-v5.com',
    to: email,
    subject: 'Reset your password',
    html: `
      <p>Click the link below to reset your password</p>
      <a href="${resetLink}">Reset your password</a>
    `,
  });
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'no-reply@next14-auth-v5.com',
    to: email,
    subject: '2FA code',
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};
