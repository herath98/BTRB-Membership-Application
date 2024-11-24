import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { ComponentProps } from '@/app/types/form-types'

export function AdditionalInfo({ formData, updateFormData }: ComponentProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  if (!formData.practicingBehaviorTherapist && !formData.otherABAQualifications) {
    return (
      <div className="space-y-4">
        <h2>If you have selected any other ABA qualifications or have been practicing as a Behavior Therapist for the past 2 years, then only want to fill this.If you want to fill this, go back. Otherwise, proceed to the next step.</h2>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Section 3. Additional Information</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="trainingDates">Date(s)</Label>
          <Input
            id="trainingDates"
            name="trainingDates"
            value={formData.trainingDates || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            name="institution"
            value={formData.institution || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="qualifications">Qualification(s)</Label>
          <Input
            id="qualifications"
            name="qualifications"
            value={formData.qualifications || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="fullTimePartTime">Full time or part time</Label>
          <Input
            id="fullTimePartTime"
            name="fullTimePartTime"
            value={formData.fullTimePartTime || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="otherInfo">Any other information</Label>
          <Textarea
            id="otherInfo"
            name="otherInfo"
            value={formData.otherInfo || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="reference">Reference</Label>
          <Input
            id="reference"
            name="reference"
            value={formData.reference || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="explanationOfServices">Explanation of services</Label>
          <Textarea
            id="explanationOfServices"
            name="explanationOfServices"
            value={formData.explanationOfServices || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

