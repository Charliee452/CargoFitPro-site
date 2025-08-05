export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <p>© {new Date().getFullYear()} CargoFit Pro. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </footer>
  );
}