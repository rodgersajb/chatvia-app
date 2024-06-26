"use client"

import { addUser } from "../../../../actions/actions";
import { useRef } from "react";
import InputEmail from "./InputEmail";
import InputName from "./InputName";
import InputFile from "./InputFile";
import Button from "./SignUpButton";

export default function SignUpForm() {
     const ref = useRef(null);

     return (
       <>
         <form
           action={async (formData) => {
             ref.current?.reset();
             await addUser(formData);
             alert('new user signed up')
           }}
         >
           <InputName />
           <InputEmail />
           <InputFile />
           <Button />
         </form>
       </>
     );
}