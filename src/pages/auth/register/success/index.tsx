import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/register";
// untuk routing sesuai dengan folder dalam pages
//route ini auth/register
const RegisterSuccessPage = () => {
  console.log("ALL EXPORTS FROM NEXTUI:");
  console.log(Object.keys(require("@nextui-org/react")));

  return (
    <AuthLayout title="Acara | Registeruccess S">
        <h1>Register Success</h1>
      <Register />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;
