import { logos, socials, testimonials } from "@/constants";

interface IFeatures {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: IButton;
}
interface IButton {
  icon: string;
  title: string;
}

interface IDetails {
  id: string;
  icon: string;
  title: string;
}

interface IFaq {
  id: string;
  question: string;
  answer: string;
}
interface IPlans {
  id: string;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  caption: string;
  features: string[];
  icon: string;
  logo: string;
}
interface ITestimonials {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
}

interface ILogos {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}
interface ILinks {
  id: string;
  title: string;
  icon: React.ElementType;
  url: string;
}

interface ISocials {
  id: string;
  title: string;
  icon: string;
  url: string;
}
