import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute"
import Index from "./pages/Index";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";


const queryClient = new QueryClient();

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogOut(){
  localStorage.clear()
  return <Register />
}

function App(){
  return(
    <QueryClientProvider client={queryClient}> {/* Fournit le client React Query à toute l'application */}
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider> {/* Fournit le contexte pour les tooltips */}
        <Toaster /> {/* Composant pour afficher les notifications (toasts) */}
        <Sonner /> {/* Autre composant de notifications (toasts) */}
          <BrowserRouter>
            <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home/>
                    </ProtectedRoute>
                  }
                />
                <Route path="/index" element={<Index/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>  
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App;
