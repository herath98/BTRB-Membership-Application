import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ComponentProps } from '@/app/types/form-types';

export function PersonalInfo({ formData, updateFormData }: ComponentProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Section 1. Personal Information</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            required
            className={!formData.firstName ? 'border-red-500' : ''}
          />
        </div>
        <div>
          <Label htmlFor="surname">Surname *</Label>
          <Input
            id="surname"
            name="surname"
            value={formData.surname || ''}
            onChange={handleChange}
            required
            className={!formData.surname ? 'border-red-500' : ''}
          />
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth (DD/MM/YY) *</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth || ''}
            onChange={handleChange}
            required
            className={!formData.dateOfBirth ? 'border-red-500' : ''}
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="address">Address *</Label>
          <Input
            id="address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
            required
            className={!formData.address ? 'border-red-500' : ''}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            required
            className={!formData.phone ? 'border-red-500' : ''}
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={handleChange}
            required
            className={!formData.email ? 'border-red-500' : ''}
          />
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">* Required fields</p>
    </div>
  );
}