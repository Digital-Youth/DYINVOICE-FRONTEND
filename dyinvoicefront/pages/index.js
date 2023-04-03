import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/LandingPage/NavBar/navbar'
import Hero from "@/components/LandingPage/Hero/hero";
import Footer from "@/components/LandingPage/Footer/footer";
import Features from "@/components/LandingPage/Feature/feature";
import CTA from "@/components/LandingPage/CTA/cta";
import Pricing from "@/components/LandingPage/Pricing/pricing";
import FAQS from "@/components/LandingPage/FAQS/Faq";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero />
      <Features />
      <CTA />
      <Pricing />
      <FAQS/>
      <Footer/>
    </>
  )
}
