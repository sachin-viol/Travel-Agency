import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Trips from "./pages/Trips";
import Blog from "./pages/Blog";
import PastTrips from "./pages/PastTrips";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TripDetail from "./pages/TripDetail";
import TeamSection from "./components/TeamSection";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Team from "./components/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/past-trips" element={<PastTrips />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />          <Route path="/trip/:slug" element={<TripDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;