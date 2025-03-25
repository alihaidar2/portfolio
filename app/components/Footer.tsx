/**
 * Simple footer with a dark gray background and gray border.
 * Year updates automatically.
 */
export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-gray-400 text-sm bg-[#1f1f1f] border-t border-gray-700">
      © {new Date().getFullYear()} Ali Haidar. All rights reserved.
    </footer>
  );
}
