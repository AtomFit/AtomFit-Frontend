import { NavigateBackButton } from "@/components/navigate-back";
import { EditProfileForm } from "./_components/edit-profile-form";

export default function EditProfilePage() {
  return (
    <>
      <main className="container my-4 lg:px-56">
        <header className="mb-6 flex items-center gap-2">
          <NavigateBackButton />
          <h1 className="text-4xl font-extrabold tracking-tight">
            Edit Profile
          </h1>
        </header>
        <EditProfileForm />
      </main>
    </>
  );
}
