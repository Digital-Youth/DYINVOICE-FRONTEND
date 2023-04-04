import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar/navbar'
import Hero from "@/components/Hero/hero";
import Footer from "@/components/Footer/footer";
import Features from "@/components/Feature/feature";
import CTA from "@/components/CTA/cta";
import Pricing from "@/components/Pricing/pricing";
import FAQS from "@/components/FAQS/Faq";

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
