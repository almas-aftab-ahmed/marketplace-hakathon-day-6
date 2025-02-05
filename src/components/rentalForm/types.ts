export interface InputFieldProps {
  label: string;
  name: string; // ✅ FIXED: Name prop added
  placeholder?: string; // ✅ FIXED: Placeholder optional kar diya
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface StepHeaderProps {
  title: string;
  subtitle: string;
  step: string;
}

export interface SelectFieldProps {
  label: string;
  name: string; // ✅ FIXED: Name prop added
  placeholder?: string; // ✅ FIXED: Placeholder optional kar diya
  icon?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface PaymentMethodProps {
  icon: string;
  name: string;
  logo?: string;
}

export interface RentalSummaryProps {
  carName: string;
  carImage: string;
  rating: number;
  reviews: number;
  subtotal: number;
  tax: number;
  total: number;
}
