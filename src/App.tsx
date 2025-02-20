import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Blog from "@/components/Blog"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <Hero />
          <Portfolio />
          <Blog />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App