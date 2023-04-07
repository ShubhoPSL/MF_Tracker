function ErrorHandler({ error }) {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-red-600">
        <p className="text-5xl font-bold">An error occurred</p>
        <pre className="text-3xl text-center">
          Reason:
          {error.message === "Failed to fetch"
            ? "API Error"
            : "Some Internal Issue"}
        </pre>
      </div>
    </div>
  );
}
export default ErrorHandler;
