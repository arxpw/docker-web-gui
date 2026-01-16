export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Docker Web GUI</div>
        <div className="space-x-4">
          <a href="/containers" className="text-gray-300 hover:text-white">
            Containers
          </a>
          <a href="/images" className="text-gray-300 hover:text-white">
            Images
          </a>
          <a href="/cleanup" className="text-gray-300 hover:text-white">
            Cleanup
          </a>
        </div>
      </div>
    </nav>
  );
}
