'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PersonalInfo } from '@/components/personal-info'
import { CriteriaSelection } from '@/components/criteria-selection'
import { AdditionalInfo } from '@/components/additional-info'
import { TermsAndConditions } from '@/components/terms-and-conditions'
import { ReviewAndSubmit } from '@/components/review-and-submit'
import type { ApplicationFormData } from './types/form-types'

export default function BTRBApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<ApplicationFormData>({})


  const updateFormData = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} />
      case 2:
        return <CriteriaSelection formData={formData} updateFormData={updateFormData} />
      case 3:
        return <AdditionalInfo formData={formData} updateFormData={updateFormData} />
      case 4:
        return <TermsAndConditions formData={formData} updateFormData={updateFormData} />
      case 5:
        return <ReviewAndSubmit formData={formData} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">BTRB Membership Application</CardTitle>
          <CardDescription className="text-center">Behaviour Therapist Registration Board</CardDescription>
        </CardHeader>
        <CardContent>
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
  )
}

