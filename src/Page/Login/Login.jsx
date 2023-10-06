import { Link } from "react-router-dom";
import Social from "../Social/Social";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loggedUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // create user
    loggedUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container mx-auto ">
      <div className=" my-20">
        <div className="border p-5 w-full max-w-sm mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <form onSubmit={handleLogIn} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5  placeholder:text-lg placeholder:font-semibold dark:placeholder-black"
                placeholder="Username or Email"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                className="  border-b-2  border-gray-300 text-black text-sm  focus:border-b-2 focus:outline-none focus:border-black block w-full p-2.5 dark:placeholder-black placeholder:text-lg placeholder:font-semibold"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start my-3">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-base font-medium text-black "
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-base text-[#F9A51A] hover:underline my-3"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#F9A51A] hover:bg-[#F9A51A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center "
            >
              Login
            </button>
            <p className="text-center">
              Don{"'"}t have an account?{" "}
              <Link
                className="text-base text-[#F9A51A] underline"
                to="/register"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
        <div className="p-5 w-full max-w-sm mx-auto">
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-600 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-600 ">
            <p className="mx-4 mb-1 text-center font-semibold ">Or</p>
          </div>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;
