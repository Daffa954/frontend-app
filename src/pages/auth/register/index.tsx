import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/register";
// untuk routing sesuai dengan folder dalam pages
//route ini auth/register
const RegisterPage = () => {
  console.log("ALL EXPORTS FROM NEXTUI:");
  console.log(Object.keys(require("@nextui-org/react")));

  return (
    <AuthLayout title="Acara | Register">
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
