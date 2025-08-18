import { ApiTester } from '@/components/ApiTester'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      {/* Quick test - this should show red background */}
     
      <ApiTester />
    </main>
  )
}
