import React from "react";

interface RegisterFormProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full bg-white p-8 rounded-lg shadow-md bg-gray-400 dark:bg-gray-800"
    >
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
