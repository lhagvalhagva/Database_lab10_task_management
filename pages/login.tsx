import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setUserType] = useState<"customer" | "employee">("customer");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login with:", email, password, userType);
    
    if (userType === "customer") {
      router.push("/customer_task");
    } else {
      router.push("/employee_task");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "10px" }}>
            <input
              type="radio"
              value="customer"
              checked={userType === "customer"}
              onChange={() => setUserType("customer")}
            />
            &nbsp;Customer
          </label>
          <label>
            <input
              type="radio"
              value="employee"
              checked={userType === "employee"}
              onChange={() => setUserType("employee")}
            />
            &nbsp;Employee
          </label>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <p style={{ textAlign: "center" }}>
        Don't have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
