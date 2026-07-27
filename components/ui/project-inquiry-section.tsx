import React, { useState } from 'react';
import { useScrollReveal } from '@/lib/animations';
import { Input } from '@/components/base-ui/input';
import { Textarea } from '@/components/base-ui/textarea';
import { Label } from '@/components/base-ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/base-ui/select';
import { section, type, surface, accentButton } from '@/lib/design';
import {
  IoPerson,
  IoMail,
  IoBusiness,
  IoCalendar,
  IoPeople,
  IoArrowForward,
} from 'react-icons/io5';

export interface ConsultationFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  teamSize: string;
  message: string;
}

export interface ProjectInquirySectionProps {
  onSubmit?: (data: ConsultationFormData) => void;
}

const defaultOnSubmit = (data: ConsultationFormData) => {
  console.log('Inquiry submitted:', data);
};

export default function ProjectInquirySection({
  onSubmit = defaultOnSubmit,
}: ProjectInquirySectionProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    teamSize: '',
    message: '',
  });

  const updateField = (field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const formRef = useScrollReveal<HTMLDivElement>('[data-anim]', { preset: 'fadeUp', stagger: 80 });

  return (
    <section data-scroll className={`${section.base} py-16 md:py-24`}>
      <div className={`${section.container} px-0 md:px-0`}>
        <div className="mb-12 max-w-2xl">
          <span className={type.eyebrow}>Get started</span>
          <h1 className={`${type.h2} mt-3`}>Start Your Project</h1>
          <p className={`${type.body} mt-4`}>
            Tell us about your vision and we will craft a tailored solution for
            your business.
          </p>
        </div>

        <div ref={formRef} className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div data-anim className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className={surface.iconField}>
                    <IoPerson className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      id="fullName"
                      placeholder="Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="w-full border-0 bg-transparent pl-10 outline-none"
                    />
                  </div>
                </div>

                <div data-anim className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className={surface.iconField}>
                    <IoMail className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full border-0 bg-transparent pl-10 outline-none"
                    />
                  </div>
                </div>

                <div data-anim className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company
                  </Label>
                  <div className={surface.iconField}>
                    <IoBusiness className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className="w-full border-0 bg-transparent pl-10 outline-none"
                    />
                  </div>
                </div>

                <div data-anim className="space-y-2">
                  <Label htmlFor="projectType" className="text-sm font-medium">
                    Project Type
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => updateField('projectType', value)}
                  >
                    <SelectTrigger
                      id="projectType"
                      className={`${surface.field} cursor-pointer`}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/[0.04] backdrop-blur-md">
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="design">Brand Design</SelectItem>
                      <SelectItem value="consulting">
                        Strategy Consulting
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div data-anim className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium">
                    Budget Range
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => updateField('budget', value)}
                  >
                    <SelectTrigger
                      id="budget"
                      className={`${surface.field} cursor-pointer`}
                    >
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/[0.04] backdrop-blur-md">
                      <SelectItem value="10k">$10k – $25k</SelectItem>
                      <SelectItem value="25k">$25k – $50k</SelectItem>
                      <SelectItem value="50k">$50k – $100k</SelectItem>
                      <SelectItem value="100k">$100k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div data-anim className="space-y-2">
                  <Label htmlFor="timeline" className="text-sm font-medium">
                    Expected Start Date
                  </Label>
                  <div className={surface.iconField}>
                    <IoCalendar className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Input
                      id="timeline"
                      type="date"
                      value={formData.timeline}
                      onChange={(e) => updateField('timeline', e.target.value)}
                      className="w-full border-0 bg-transparent pl-10 outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                </div>

                <div data-anim className="space-y-2">
                  <Label htmlFor="teamSize" className="text-sm font-medium">
                    Team Size Required
                  </Label>
                  <div className={surface.iconField}>
                    <IoPeople className="text-[var(--text-tertiary)] absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value) => updateField('teamSize', value)}
                    >
                      <SelectTrigger
                        id="teamSize"
                        className={`${surface.field} cursor-pointer pl-10`}
                      >
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/[0.04] backdrop-blur-md">
                        <SelectItem value="solo">Solo Contributor</SelectItem>
                        <SelectItem value="small">Small Team (2–4)</SelectItem>
                        <SelectItem value="medium">
                          Medium Team (5–8)
                        </SelectItem>
                        <SelectItem value="large">Large Team (9+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div data-anim className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Project Details
                  </Label>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors hover:border-[#FF4202]/55 focus-within:border-[#FF4202]">
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your goals, challenges, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full resize-none border-0 bg-transparent px-3 py-2.5 outline-none"
                    />
                  </div>
                </div>
              </div>

              <button data-anim type="submit" className={`${accentButton} w-full sm:w-auto`}>
                Submit Inquiry
                <IoArrowForward className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-6">
              <div className={surface.card} data-anim>
                <h3 className="text-xl font-medium tracking-tight text-[var(--text-primary)]">
                  Why partner with us?
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    'Dedicated project managers',
                    'Transparent weekly updates',
                    'Post-launch support included',
                    'Source code handover guaranteed',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[var(--text-body)]"
                    >
                      <span className="bg-[var(--primary)] mt-2 h-2 w-2 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-anim className="bg-[#FF4202] text-white relative overflow-hidden rounded-lg p-8 shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)]">
                <div className="bg-white/10 absolute -top-8 -right-8 h-32 w-32 rounded-full" />
                <div className="bg-white/10 absolute -bottom-8 -left-8 h-24 w-24 rounded-full" />
                <h3 className="text-xl font-medium tracking-tight">
                  Response Time
                </h3>
                <p className="mt-4 text-3xl font-bold">Under 4 hours</p>
                <p className="mt-4 text-sm opacity-80">
                  Our team reviews every inquiry personally to ensure we
                  understand your needs before reaching out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
