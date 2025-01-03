import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from '@/app/types/form-types';

export function AdditionalInfo({ formData, updateFormData }: ComponentProps) {
  const [educationFile, setEducationFile] = useState<File | null>(null);
  const [workExperienceFile, setWorkExperienceFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [insuranceFile, setInsuranceFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (file) {
      switch (type) {
        case 'education':
          setEducationFile(file);
          updateFormData({ educationFileName: file.name });
          break;
        case 'workExperience':
          setWorkExperienceFile(file);
          updateFormData({ workExperienceFileName: file.name });
          break;
        case 'cv':
          setCvFile(file);
          updateFormData({ cvFileName: file.name });
          break;
        case 'insurance':
          setInsuranceFile(file);
          updateFormData({ insuranceFileName: file.name });
          break;
      }
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Section 3. Additional Information</h2>

      <h3 className="text-xl font-semibold">Section 3 (A). Education</h3>
      <div className="space-y-4">
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
          <Label htmlFor="periodOfEducation">Period of Education</Label>
          <Input
            id="periodOfEducation"
            name="periodOfEducation"
            value={formData.periodOfEducation || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="qualifications">Professional Qualification/Certifications</Label>
          <Input
            id="qualifications"
            name="qualifications"
            value={formData.qualifications || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="educationFileUpload">Upload Documentation</Label>
          <input
            type="file"
            id="educationFileUpload"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e, 'education')}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('educationFileUpload')?.click()}
          >
            Upload Documentation
          </Button>
          {educationFile && (
            <span className="text-sm text-gray-600">{educationFile.name}</span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold">Section 3 (B). Work Experience</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="workPlaceName">Work Place Name</Label>
          <Input
            id="workPlaceName"
            name="workPlaceName"
            value={formData.workPlaceName || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="workPlaceAddress">Work Place Address</Label>
          <Input
            id="workPlaceAddress"
            name="workPlaceAddress"
            value={formData.workPlaceAddress || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="employmentPeriod">Employment Period</Label>
          <Input
            id="employmentPeriod"
            name="employmentPeriod"
            value={formData.employmentPeriod || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="designation">Designation</Label>
          <Input
            id="designation"
            name="designation"
            value={formData.designation || ''}
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
          <Label htmlFor="explanationOfServices">Explanation of Services</Label>
          <Textarea
            id="explanationOfServices"
            name="explanationOfServices"
            value={formData.explanationOfServices || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="workExperienceFileUpload">Upload Employer Reference Letter</Label>
          <input
            type="file"
            id="workExperienceFileUpload"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e, 'workExperience')}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('workExperienceFileUpload')?.click()}
          >
            Upload Reference Letter
          </Button>
          {workExperienceFile && (
            <span className="text-sm text-gray-600">{workExperienceFile.name}</span>
          )}
        </div>
        <div>
          <Label htmlFor="cvFileUpload">Upload CV</Label>
          <input
            type="file"
            id="cvFileUpload"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e, 'cv')}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('cvFileUpload')?.click()}
          >
            Upload CV
          </Button>
          {cvFile && (
            <span className="text-sm text-gray-600">{cvFile.name}</span>
          )}
        </div>
        <div>
          <Label htmlFor="insuranceFileUpload">Upload Professional Indemnity Insurance (Optional)</Label>
          <input
            type="file"
            id="insuranceFileUpload"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e, 'insurance')}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById('insuranceFileUpload')?.click()}
          >
            Upload Insurance
          </Button>
          {insuranceFile && (
            <span className="text-sm text-gray-600">{insuranceFile.name}</span>
          )}
        </div>
      </div>
    </div>
  );
}