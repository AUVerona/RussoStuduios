export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        {children}
      </body>
    </html>
  );
}
