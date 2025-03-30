const LayoutToggle = ({ layout, setLayout }) => {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
      onClick={() => setLayout(layout === "grid" ? "stack" : "grid")}
    >
      Toggle Layout: {layout === "grid" ? "Stacked" : "Grid"}
    </button>
  );
};

export default LayoutToggle;
