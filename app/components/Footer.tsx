export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#1f1f1f] border-t border-gray-700 text-left py-4 px-6 text-gray-400 text-sm z-50">
      © {new Date().getFullYear()} Ali Haidar. All rights reserved.
    </footer>
  );
}
