import { Button } from '@/components/ui/button'
import type { ApplicationFormData } from '@/app/types/form-types'

export function ReviewAndSubmit({ formData }: { formData: ApplicationFormData }) {
  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // You can add logic here to send the data to your server
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Review and Submit</h2>
      <div className="space-y-2">
        <p>Please review your information before submitting:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
      <Button onClick={handleSubmit} className="w-full">Submit Application</Button>
    </div>
  )
}

