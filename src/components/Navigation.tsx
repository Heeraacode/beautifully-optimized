diff --git a/src/components/Navigation.tsx b/src/components/Navigation.tsx
index 43e3220d46ec96207dba2648fdb68ff3951101bd..2f52c99904f9852764d5e2c6d747f75ef8abd848 100644
--- a/src/components/Navigation.tsx
+++ b/src/components/Navigation.tsx
@@ -1,46 +1,46 @@
 import { useState, useEffect } from "react";
 
 export const Navigation = () => {
   const [isScrolled, setIsScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const scrollToSection = (id: string) => {
     const element = document.getElementById(id);
     element?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
     <nav
-      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center transition-all duration-300 ${
+      className={`fixed top-0 left-0 right-0 z-50 page-padding py-4 flex justify-between items-center transition-all duration-300 ${
         isScrolled
           ? "bg-background/90 backdrop-blur-md"
           : "bg-transparent"
       }`}
     >
       <a
         href="#"
         className="flex items-center gap-2 font-serif text-base font-medium hover-target"
       >
         <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
         Heeraa Ananthan
       </a>
 
       <div className="hidden md:flex items-center gap-8">
         <button
           onClick={() => scrollToSection("about")}
           className="text-sm text-foreground-muted hover:text-foreground transition-colors hover-target"
         >
           About
         </button>
         <button
           onClick={() => scrollToSection("work")}
           className="text-sm text-foreground-muted hover:text-foreground transition-colors hover-target"
         >
           Work
