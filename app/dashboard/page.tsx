import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Welcome to LOOP
        </h1>
        <p className="mb-8 text-gray-600">
          Logged in as {session.user?.email} ({(session.user as any)?.role})
        </p>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <p className="text-gray-500">
            Dashboard content will go here — feedback inbox, charts, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
