// app/cancel.tsx
export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600">Your rental process was interrupted. Please try again.</p>
      </div>
    </div>
  );
}