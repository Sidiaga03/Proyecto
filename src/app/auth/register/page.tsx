import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
    return (
        <main className="flex items-center justify-center md:h-screen bg-white">
          <div className="relative mx-auto flex w-full  flex-col space-y-2.5 p-4 md:-mt-32">
            <div className="flex h-20 w-full items-end rounded-lg  p-3 md:h-36">
              <div className="w-32 text-white md:w-36">
              </div>
            </div>
            <RegisterForm />
          </div>
        </main>
      );
}


export default RegisterPage