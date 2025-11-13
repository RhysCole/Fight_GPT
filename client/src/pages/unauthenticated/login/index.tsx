import { useState } from "react";
import { Link } from "react-router";

import { useAuth } from "@/hooks/useAuth";

import  AuthHeader  from "../layout/authHeader";

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        login({
            email: data.email,
            password: data.password
        })
    }

    return (
        <>
            <div className="flex flex-col items-stretch p-6 md:p-8 lg:p-16">

                <AuthHeader/>

                <h3 className="mt-2 text-center text-xl font-semibold md:mt-12 lg:mt-10">Login</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mt-2 md:mt-10">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email Address</legend>
                            <label className="input w-full focus:outline-0">
                                <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                                <input className="grow focus:outline-0" placeholder="Email Address" type="email" name="email"/>
                            </label>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <label className="input w-full focus:outline-0">
                                <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                                <input
                                    className="grow focus:outline-0"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                />
                                <button
                                    className="btn btn-xs btn-ghost btn-circle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Password">
                                    {showPassword ? (
                                        <span className="iconify lucide--eye-off size-4" />
                                    ) : (
                                        <span className="iconify lucide--eye size-4" />
                                    )}
                                </button>
                            </label>
                        </fieldset>

                        <button className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                            <span className="iconify lucide--log-in size-4" />
                            Login
                        </button>



                        <p className="text-base-content/80 mt-4 text-center text-sm md:mt-6">
                            Haven&apos;t account
                            <Link className="text-primary ms-1 hover:underline" to="/auth/register">
                                Create One
                            </Link>
                        </p>

                        <p className="text-base-content/80 mt-4 text-center text-sm md:mt-6">
                            <Link className="text-primary ms-1 hover:underline" to="/">
                                Go Home
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
