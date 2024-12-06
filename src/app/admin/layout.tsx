"use client";

import AdminPanel from "../../components/AdminPanel";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full z-0">
      <AdminPanel />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
