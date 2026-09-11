import { useTranslations } from 'next-intl'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import HospitalsSection from '@/components/home/HospitalsSection'
import SpecialtiesSection from '@/components/home/SpecialtiesSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HospitalsSection />
      <SpecialtiesSection />
      <ReviewsSection />
      <ContactSection />
    </>
  )
}
