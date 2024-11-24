'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PersonalInfo } from '@/components/personal-info';
import { CriteriaSelection } from '@/components/criteria-selection';
import { AdditionalInfo } from '@/components/additional-info';
import { TermsAndConditions } from '@/components/terms-and-conditions';
import { ReviewAndSubmit } from '@/components/review-and-submit';
import type { ApplicationFormData } from './types/form-types';

export default function BTRBApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>({});
  const [showError, setShowError] = useState(false);

  const updateFormData = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setShowError(false); // Clear error when user makes changes
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return (
          formData.firstName?.trim() &&
          formData.surname?.trim() &&
          formData.dateOfBirth?.trim() &&
          formData.address?.trim() &&
          formData.phone?.trim() &&
          formData.email?.trim()
        );
      // Add validation for other steps as needed
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    setShowError(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <CriteriaSelection formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <AdditionalInfo formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <TermsAndConditions formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <ReviewAndSubmit formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            BTRB Membership Application
          </CardTitle>
          <CardDescription className="text-center">
            Behaviour Therapist Registration Board
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showError && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>
                Please fill in all required fields before proceeding.
              </AlertDescription>
            </Alert>
          )}
          {renderStep()}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <Button onClick={prevStep} variant="outline">
                Previous
              </Button>
            )}
            {step < 5 && (
              <Button onClick={nextStep} className="ml-auto">
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}