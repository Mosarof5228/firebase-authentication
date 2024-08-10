import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";

const Login = () => {
    const emailRef = useRef(null);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        setSuccess('');
        setError("");
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                if (result.user.emailVerified) {
                    setSuccess("user logged in successfully");
                }
                else {
                    alert("please verify your email address");
                    return;
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        console.log(emailRef.current.value)
        if (!email) {
            alert("Please set email");
            return;
        }
        else if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert("please give valid email");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please check your email")
            })
            .catch(error => {
                console.log(error);
            })



    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">

                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        success && alert("User loged in succesfully")
                    }
                    {
                        error && <h2 className="text-green-600">{error}</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;