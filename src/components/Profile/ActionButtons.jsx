function ActionButtons() {
  return (
    <div className="flex gap-4 mt-6">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
        Edit Profile
      </button>

      <button className="border border-slate-300 hover:bg-slate-100 px-6 py-3 rounded-lg transition">
        Download ID Card
      </button>

    </div>
  );
}

export default ActionButtons;