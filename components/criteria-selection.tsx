import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import type { ComponentProps } from '@/app/types/form-types'

export function CriteriaSelection({ formData, updateFormData }: ComponentProps) {
  const handleChange = (checked: boolean, name: string) => {
    updateFormData({ [name]: checked })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Section 2. Check all criteria that apply</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="currentRBT"
            checked={formData.currentRBT || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'currentRBT')}
          />
          <Label htmlFor="currentRBT">Current RBT</Label>
        </div>
        {formData.currentRBT && (
          <Input
            name="rbtCertificationNo"
            placeholder="Certification No."
            value={formData.rbtCertificationNo || ''}
            onChange={handleInputChange}
          />
        )}
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="currentIBT"
            checked={formData.currentIBT || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'currentIBT')}
          />
          <Label htmlFor="currentIBT">Current IBT</Label>
        </div>
        {formData.currentIBT && (
          <Input
            name="ibtCertificationNo"
            placeholder="Certification No."
            value={formData.ibtCertificationNo || ''}
            onChange={handleInputChange}
          />
        )}
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="expiredRBT"
            checked={formData.expiredRBT || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'expiredRBT')}
          />
          <Label htmlFor="expiredRBT">Expired RBT (Provide documentation)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="voluntaryInactiveRBT"
            checked={formData.voluntaryInactiveRBT || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'voluntaryInactiveRBT')}
          />
          <Label htmlFor="voluntaryInactiveRBT">Voluntary Inactive RBT</Label>
        </div>
        {formData.voluntaryInactiveRBT && (
          <div className="space-y-2">
            <Input
              name="voluntaryInactiveRBTCertificationNo"
              placeholder="Certification No."
              value={formData.voluntaryInactiveRBTCertificationNo || ''}
              onChange={handleInputChange}
            />
            <Input
              name="voluntaryInactiveRBTReactivationDate"
              placeholder="Date of reactivation"
              value={formData.voluntaryInactiveRBTReactivationDate || ''}
              onChange={handleInputChange}
            />
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="expiredIBT"
            checked={formData.expiredIBT || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'expiredIBT')}
          />
          <Label htmlFor="expiredIBT">Expired IBT (Provide documentation)</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="practicingBehaviorTherapist"
            checked={formData.practicingBehaviorTherapist || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'practicingBehaviorTherapist')}
          />
          <Label htmlFor="practicingBehaviorTherapist">Practicing as Behavior Therapist for the past 2 years</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="otherABAQualifications"
            checked={formData.otherABAQualifications || false}
            onCheckedChange={(checked) => handleChange(checked as boolean, 'otherABAQualifications')}
          />
          <Label htmlFor="otherABAQualifications">Any other ABA qualifications</Label>
        </div>
      </div>
    </div>
  )
}

