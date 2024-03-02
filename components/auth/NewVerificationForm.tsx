'use client';
import { newVerification } from '@/actions/new-verification';
import CardWrapper from '@/components/auth/CardWrapper';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import FormSuccess from '../FormSuccess';
import FormError from '../FormError';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError('Token not found');
      return;
    }

    try {
      const data = await newVerification(token);
      console.log(data);
      setSuccess(data.success);
      setError(data.error);
    } catch (error) {
      setError('Something went wrong');
    }
  }, [error, success, token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel='Confirming your verification'
      backButtonLabel='Back to login'
      backButtonHref='/auth/login'
    >
      <div className='flex items-center w-full justify-center'>
        {!success && !error && (
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
        )}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
