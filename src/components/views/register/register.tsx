import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Spinner,
} from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/logos/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          className="w-2/3 lg:w-full"
          alt="login"
          width={1024}
          height={1024}
        />
      </div>
      <Card className="p-8">
        <CardBody>
          <h2 className="text-xl font-bold text-danger-500">
            Create an Account
          </h2>
          <p className="mb-4 text-small">
            Have an Account?{" "}
            <Link href="/auth/login" className="font-semibold text-danger-400">
              Login
            </Link>
          </p>
          <form
            action=""
            className="flex w-80 flex-col gap-4"
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="fullname"
                  variant="bordered"
                  autoComplete="off"
                />
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="username"
                  variant="bordered"
                  autoComplete="off"
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  label="email"
                  variant="bordered"
                  autoComplete="off"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.password ? "text" : "password"}
                  label="Password"
                  variant="bordered"
                  autoComplete="off"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword("password")}
                    >
                      {visiblePassword.password ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={
                    visiblePassword.passwordConfirmation ? "text" : "password"
                  }
                  label="Password Confirmation"
                  variant="bordered"
                  autoComplete="off"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() =>
                        handleVisiblePassword("passwordConfirmation")
                      }
                    >
                      {visiblePassword.passwordConfirmation ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Button color="danger" type="submit" size="lg">
              {isPendingRegister ? (
                <Spinner color="white" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
