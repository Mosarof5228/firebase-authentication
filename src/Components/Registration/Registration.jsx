import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegoste = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const checked = event.target.terms.checked;
        const name = event.target.name.value;
        console.log(name, email, password, checked);
        setSuccess(" ");
        setError('');
        if (password.length < 6) {
            alert("password must be six caracter at list")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("Passwrod at list one upperCase!!")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setError("Password at list one lower case");
            return;
        }
        else if (!checked) {

            setError("Please checkbox click first")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })

                sendEmailVerification(result.user)
                    .then(() => {
                        alert("Please check your email and verify your accout");
                    })

            })
            .catch(error => {
                console.error(error);
                setError('Already use this email so use new email for creat user!!')

            })

    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (

        <div className="  w-full">
            <div className=" text-center">
                <h2 className="text-2xl font-bold mt-4">This is Registration page</h2>
                <form onSubmit={handleRegoste} >
                    <label htmlFor="">Name:</label><input type="text" className="w-2/4 px-4 rounded-md outline-1 outline m-4" name="name" placeholder="name" id="" required />
                    <label htmlFor="">Email:</label><input type="email" className="w-2/4 px-4 rounded-md outline-1 outline m-4" name="email" placeholder="email" id="" required />
                    <br />
                    <label htmlFor="">Password:</label> <input type={showPassword ? "text" : "password"} className="w-2/4 px-4 rounded-md outline outline-1 m-4" placeholder="password" name="password" id="" required /> <span onClick={handleShowPassword} className="cursor-pointer font-bold text-xl  inline-block ml-[-50px]">
                        {
                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }
                    </span>
                    <br />
                    <input type="checkbox" name="terms" className=" my-4 mx-2 text-green-400" id="" />
                    <label htmlFor=""><a className="text-green-800" href="#">Please Accept our terms and condition!</a></label>
                    <br />
                    <input className="btn btn-active w-2/4 btn-secondary" type="submit" value="Submit" />
                </form>
                {
                    error && <h2 className="text-red-600 font-bold mt-4">{error}</h2>
                }

                {
                    success && <h2 className="text-green-500 font-bold mt-4">{success}</h2>
                }
            </div>
        </div>

    );
};

export default Registration;