'use client';

import { UserRole } from '@prisma/client';
import { useCurrentRole } from '@/hooks/use-current-role';
import FormError from '../FormError';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message='You do not have permission to view this content!' />
    );
  }

  return <>{children}</>;
};

export default RoleGate;
