import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayouts from "./Layouts/AppLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import CustomerCases from "./pages/CustomerCases";
import Careers from "./pages/Careers";
import LearnMore from "./pages/LearnMore";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /* staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1, */
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayouts />}>
              {/* Main pages */}
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/customerCases" element={<CustomerCases />} />
              <Route path="/learnMore" element={<LearnMore />} />
              <Route path="/news" element={<News />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/newsDetails/:id" element={<NewsDetails />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 8000 },
          error: { duration: 10000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "",
          },
        }}
      />
    </>
  )
}
