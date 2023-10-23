import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeFeature from '@/features/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeFeature />
    </>
  );
}
