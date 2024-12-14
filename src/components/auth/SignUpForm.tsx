import React from 'react';
import { AuthCard } from './AuthCard';
import { FormInput } from './FormInput';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';
import { useFormValidation } from '@/hooks/useFormValidation';
import { signUpSchema } from '@/lib/validation';
import type { AuthNavigationProps } from '@/types/auth';

interface SignUpFormProps extends AuthNavigationProps {
  onClose: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onClose, onNavigate }) => {
  const { formData, errors, handleChange, handleSubmit } = useFormValidation({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  });

  return (
    <AuthCard
      title="Create your account"
      description="Start managing your customer reviews effectively"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            error={errors.firstName}
            required
          />
          <FormInput
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            error={errors.lastName}
            required
          />
        </div>
        
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          error={errors.email}
          required
        />
        
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          error={errors.password}
          required
        />
        
        <Button type="submit" variant="primary" className="w-full">
          Create Account
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => onNavigate('login')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Log in
          </button>
        </p>
      </form>
    </AuthCard>
  );
};