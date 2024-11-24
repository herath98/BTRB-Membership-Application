"use client";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Eye, EyeOff, AlertCircle, Check } from "lucide-react";

export type ValidationRule = {
  test: (value: string) => boolean;
  message: string;
};

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  validationRules?: ValidationRule[];
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  required?: boolean;
  helperText?: string;
  showStrength?: boolean;
  customStyles?: {
    container?: string;
    label?: string;
    input?: string;
    error?: string;
    success?: string;
    helper?: string;
  };
}

export function FormInput({
  label,
  error: externalError,
  success,
  icon,
  className,
  showPasswordToggle,
  type = "text",
  validationRules = [],
  validateOnChange = true,
  validateOnBlur = true,
  required = false,
  helperText,
  showStrength = false,
  customStyles = {},
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | undefined>(externalError);
  const [touched, setTouched] = useState(false);
  const [strength, setStrength] = useState(0);
  const [value, setValue] = useState(props.value || "");

  const inputType = showPassword ? "text" : type;

  useEffect(() => {
    setError(externalError);
  }, [externalError]);

  const validateInput = (inputValue: string) => {
    if (required && !inputValue) {
      setError("This field is required");
      return false;
    }

    for (const rule of validationRules) {
      if (!rule.test(inputValue)) {
        setError(rule.message);
        return false;
      }
    }

    setError(undefined);
    return true;
  };

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    if (password.length > 8) score += 20;
    if (/[A-Z]/.test(password)) score += 20;
    if (/[a-z]/.test(password)) score += 20;
    if (/[0-9]/.test(password)) score += 20;
    if (/[^A-Za-z0-9]/.test(password)) score += 20;
    setStrength(score);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (type === "password" && showStrength) {
      calculatePasswordStrength(newValue);
    }

    if (validateOnChange && touched) {
      validateInput(newValue);
    }

    props.onChange?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    if (validateOnBlur) {
      validateInput(e.target.value);
    }
    props.onBlur?.(e);
  };

  return (
    <div className={cn("w-full space-y-2", customStyles.container)}>
      {label && (
        <Label 
          htmlFor={props.id}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            error && "text-destructive",
            success && "text-green-600",
            customStyles.label
          )}
        >
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}

        <Input
          type={inputType}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            "transition-all duration-200",
            icon && "pl-10",
            error && "border-destructive focus-visible:ring-destructive",
            success && "border-green-500 focus-visible:ring-green-500",
            customStyles.input,
            className
          )}
          {...props}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}

        {error && (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
        )}

        {success && !error && (
          <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
        )}
      </div>

      {error && (
        <p className={cn("text-sm font-medium text-destructive", customStyles.error)}>
          {error}
        </p>
      )}

      {success && !error && (
        <p className={cn("text-sm font-medium text-green-600", customStyles.success)}>
          {success}
        </p>
      )}

      {helperText && !error && !success && (
        <p className={cn("text-sm text-muted-foreground", customStyles.helper)}>
          {helperText}
        </p>
      )}

      {showStrength && type === "password" && value && (
        <div className="space-y-1">
          <div className="flex gap-1 h-1">
            <div className={cn("flex-1 rounded-full transition-all duration-300",
              strength >= 20 ? "bg-red-500" : "bg-gray-200",
            )} />
            <div className={cn("flex-1 rounded-full transition-all duration-300",
              strength >= 40 ? "bg-orange-500" : "bg-gray-200",
            )} />
            <div className={cn("flex-1 rounded-full transition-all duration-300",
              strength >= 60 ? "bg-yellow-500" : "bg-gray-200",
            )} />
            <div className={cn("flex-1 rounded-full transition-all duration-300",
              strength >= 80 ? "bg-green-500" : "bg-gray-200",
            )} />
            <div className={cn("flex-1 rounded-full transition-all duration-300",
              strength >= 100 ? "bg-green-600" : "bg-gray-200",
            )} />
          </div>
          <p className="text-xs text-muted-foreground">
            {strength < 20 && "Very Weak"}
            {strength >= 20 && strength < 40 && "Weak"}
            {strength >= 40 && strength < 60 && "Fair"}
            {strength >= 60 && strength < 80 && "Good"}
            {strength >= 80 && strength < 100 && "Strong"}
            {strength === 100 && "Very Strong"}
          </p>
        </div>
      )}
    </div>
  );
}