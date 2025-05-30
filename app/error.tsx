"use client"

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold text-red-600">
        دریافت بلاگ با خطا مواجه شد
      </h1>
      <p className="mt-4">{error.message}</p>
    </div>
  )
}
