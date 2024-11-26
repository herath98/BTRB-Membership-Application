import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { ComponentProps } from '@/app/types/form-types'
import { useState } from 'react'

export function CriteriaSelection({ formData, updateFormData }: ComponentProps) {
  const [expiredRBTFile, setExpiredRBTFile] = useState<File | null>(null)
  const [expiredIBTFile, setExpiredIBTFile] = useState<File | null>(null)

  const handleChange = (checked: boolean, name: string) => {
    updateFormData({ [name]: checked })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'RBT' | 'IBT') => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (allowedTypes.includes(file.type)) {
        updateFormData({ 
          [`expired${type}FileName`]: file.name 
        })
        type === 'RBT' ? setExpiredRBTFile(file) : setExpiredIBTFile(file)
      } else {
        alert('Please upload only PDF or DOC/DOCX files.')
        e.target.value = '' // Clear the file input
      }
    }
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
        {formData.expiredRBT && (
          <div className="space-y-2 pl-6">
            <input 
              type="file" 
              id="expiredRBTFileUpload"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, 'RBT')}
              className="hidden"
            />
            <div className="flex items-center space-x-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => document.getElementById('expiredRBTFileUpload')?.click()}
              >
                Upload Documentation
              </Button>
              {expiredRBTFile && (
                <span className="text-sm text-gray-600">
                  {expiredRBTFile.name}
                </span>
              )}
            </div>
          </div>
        )}
        
      
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
        {formData.expiredIBT && (
          <div className="space-y-2 pl-6">
            <input 
              type="file" 
              id="expiredIBTFileUpload"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, 'IBT')}
              className="hidden"
            />
            <div className="flex items-center space-x-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => document.getElementById('expiredIBTFileUpload')?.click()}
              >
                Upload Documentation
              </Button>
              {expiredIBTFile && (
                <span className="text-sm text-gray-600">
                  {expiredIBTFile.name}
                </span>
              )}
            </div>
          </div>
        )}
        
        
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

