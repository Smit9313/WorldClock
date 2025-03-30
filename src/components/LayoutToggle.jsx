const LayoutToggle = ({ layout, setLayout }) => {
  return (
    <button
      className="bg-indigo-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out font-medium"
      onClick={() => setLayout(layout === "grid" ? "stack" : "grid")}
    >
      Change Layout: {layout === "grid" ? "Stacked" : "Grid"}
    </button>
  );
};

export default LayoutToggle;
