import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import "../global.css";


export default function Layout() {
  return (
    <ClerkProvider>
      <Slot />
    </ClerkProvider>
  )
}