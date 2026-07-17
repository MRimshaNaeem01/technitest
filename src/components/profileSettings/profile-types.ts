export type ProfileTab =
  | "my-profile"
  | "my-quizzes"
  | "my-certificates"
  | "transactions"
  | "referrals"
  | "favorite-quizzes"
  | "payment-method";

export const PROFILE_TABS: { id: ProfileTab; label: string }[] = [
  { id: "my-profile", label: "My Profile" },
  { id: "my-quizzes", label: "My Quizzes" },
  { id: "my-certificates", label: "My Certificates" },
  { id: "transactions", label: "Transactions" },
  { id: "referrals", label: "Referrals" },
  { id: "favorite-quizzes", label: "Favorite Quizzes" },
  { id: "payment-method", label: "Payment Method" },
];

export type ProfileUser = {
  name: string;
  title: string;
  location: string;
  avatar: string;
  referralLink: string;
  coins: number;
  issuedCoins: number;
  issuedDate: string;
  expiryDate: string;
};

export type ProfileQuiz = {
  id: string;
  title: string;
  category: string;
  description: string;
  level: string;
  score: number;
  maxScore: number;
  percentage: number;
  totalQuestions: number;
  duration: string;
  lastAttemptDate: string;
  attemptNumber: number;
  totalAttempts: number;
  status: "passed" | "failed";
  image: string;
  reportUrl?: string;
  certificateUrl?: string;
};

export type ProfileFormData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  gender: string;
  dateOfBirth: string;
  identificationNo: string;
  level: string;
  highestEducation: string;
};

export type PasswordFormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type Transaction = {
  id: string;
  orderId: string;
  type: "re-attempt" | "renewal" | "quiz";
  status: "success" | "cancelled" | "pending";
  refundStatus: "non-refundable" | "refundable";
  date: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  receiptUrl?: string;
  invoiceUrl?: string;
};

export type Referral = {
  id: string;
  name: string;
  email: string;
  phone: string;
  coinsEarned: number;
  registeredOn: string;
  status: "active" | "expired";
  statusDate: string;
};

export type FavoriteQuiz = {
  id: string;
  title: string;
  category: string;
  description: string;
  level: string;
  rating: number;
  duration: string;
  totalQuestions: number;
  image: string;
  resultUrl: string;
  isFavorite: boolean;
};

export type SavedPaymentMethod = {
  id: string;
  provider: "stripe" | "paypal" | "jazzcash" | "easypaisa";
  holderName: string;
  maskedNumber: string;
  date: string;
  isDefault: boolean;
};

export type PaymentFormData = {
  provider: "stripe" | "paypal" | "jazzcash" | "easypaisa";
  holderName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};
