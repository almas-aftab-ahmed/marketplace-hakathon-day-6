// app/success.tsx
export default function Success() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
          <p className="text-gray-600">Your rental has been confirmed. Check your email for details.</p>
        </div>
      </div>
    );
  }