export interface ApplicationFormData {
  // Personal Information
  firstName?: string;
  surname?: string;
  dateOfBirth?: string;
  address?: string;
  phone?: string;
  email?: string;

  // Criteria Selection
  currentRBT?: boolean;
  rbtCertificationNo?: string;
  currentIBT?: boolean;
  ibtCertificationNo?: string;
  expiredRBT?: boolean;
  voluntaryInactiveRBT?: boolean;
  voluntaryInactiveRBTCertificationNo?: string;
  voluntaryInactiveRBTReactivationDate?: string;
  expiredIBT?: boolean;
  practicingBehaviorTherapist?: boolean;
  otherABAQualifications?: boolean;

  // Additional Information
  trainingDates?: string;
  institution?: string;
  qualifications?: string;
  fullTimePartTime?: string;
  otherInfo?: string;
  reference?: string;
  explanationOfServices?: string;

  // Terms and Conditions
  resident?: boolean;
  agreeObjectives?: boolean;
  agreeMaintenance?: boolean;
  agreeLicense?: boolean;
  agreeUpdate?: boolean;
  agreeMalpractice?: boolean;
  agreeEthics?: boolean;
}

export interface ComponentProps {
  formData: ApplicationFormData;
  updateFormData: (data: Partial<ApplicationFormData>) => void;
}

