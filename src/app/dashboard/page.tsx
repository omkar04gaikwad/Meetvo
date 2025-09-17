import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <SignedIn>
        <h1 className="text-2xl">Welcome to your Dashboard!</h1>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>You must sign in to access the dashboard.</p>
      </SignedOut>
    </div>
  );
}
