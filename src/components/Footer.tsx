diff --git a/src/components/Footer.tsx b/src/components/Footer.tsx
index fc50965142acb53d9bb701654d332b5142d873ea..0ffae315a1d39b62e697804619ea4069c5b7fb25 100644
--- a/src/components/Footer.tsx
+++ b/src/components/Footer.tsx
@@ -1,9 +1,9 @@
 export const Footer = () => {
   return (
-    <footer className="py-5 px-6 md:px-16 text-center border-t border-foreground/5">
+    <footer className="py-5 page-padding text-center border-t border-foreground/5">
       <p className="font-handwritten text-base text-foreground-muted">
         Built with care. And caffeine. ☕
       </p>
     </footer>
   );
 };
