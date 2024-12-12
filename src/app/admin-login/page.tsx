'use client'
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@lib/firebaseConfig";

export default function AdminAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError("Failed log in. Wrong email or Password")
    }
  }
    return(
      <div>

      </div>
    )
}
