import { useState } from "react";
import { Link } from "react-router";

import AuthHeader from "../layout/authHeader";
import { useAuth } from "@/hooks/useAuth";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {register} = useAuth();

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        register({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
        })
    }

    return (
        <>
            <div className="flex flex-col items-stretch p-8 lg:p-16">

                <AuthHeader/>   

                <h3 className="mt-8 text-center text-xl font-semibold md:mt-12 lg:mt-8">Register</h3>

                <div className="mt-6 md:mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name</legend>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--user text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="First Name" type="text" name="firstname" />
                                </label>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--user text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="Last Name" type="text" name="lastname"/>
                                </label>
                            </fieldset>
                        </div>
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

                        <button type="submit" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                            <span className="iconify lucide--user-plus size-4" />
                            Register
                        </button>

                        <p className="text-base-content/80 mt-4 text-center text-sm md:mt-6">
                            I have already to
                            <Link className="text-primary ms-1 hover:underline" to="/auth/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>

            </div>

        </>
    );
};

export default RegisterPage;
