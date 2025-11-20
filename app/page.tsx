import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Mommy's Log
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
          Track Your Baby's Feeding & Diaper Changes
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Privately & Simply
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            ✓ 100% Free Forever
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            ✓ No Ads
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
            ✓ 100% Private
          </span>
        </div>

        {/* App Store Button */}
        <a
          href="https://apps.apple.com/us/app/mommys-log/id6755473620"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1734912000"
            alt="Download on the App Store"
            className="h-16 md:h-20"
          />
        </a>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Simple Baby Tracking
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mommy-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍼</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Track Feedings</h3>
              <p className="text-gray-600">
                Log breast, bottle, and formula feedings with duration and amount tracking
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mommy-rose rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧷</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Log Diapers</h3>
              <p className="text-gray-600">
                Record wet and dirty diapers to track your baby's health patterns
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mommy-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Export Data</h3>
              <p className="text-gray-600">
                Share feeding and diaper logs with pediatricians via CSV or text
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Clean & Simple Interface
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Screenshot 1: Main Feeding Page */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200">
              <Image
                src="/main-feedingpage.PNG"
                alt="Mommy's Log - Main Feeding Page"
                width={414}
                height={896}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Screenshot 2: Feeding */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200">
              <Image
                src="/feeding.PNG"
                alt="Mommy's Log - Feeding Tracker"
                width={414}
                height={896}
                className="w-full h-auto"
              />
            </div>
            {/* Screenshot 3: History */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200">
              <Image
                src="/History.PNG"
                alt="Mommy's Log - History View"
                width={414}
                height={896}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              🔒 Your Privacy Matters
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              All your baby's data stays on YOUR device
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-gray-700">
              <li>✓ No account required</li>
              <li>✓ No data collection</li>
              <li>✓ No tracking</li>
              <li>✓ No third-party services</li>
              <li>✓ Works completely offline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-mommy-pink/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Tracking Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Free forever. No credit card required.
          </p>
          <a
            href="https://apps.apple.com/us/app/mommys-log/id6755473620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1734912000"
              alt="Download on the App Store"
              className="h-16 md:h-20"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Mommy's Log</h3>
          <p className="text-gray-400 mb-6">
            The simple, private way to track your baby's daily activities
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://lcantillo84.github.io/mom-baby-logger/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:lilianne.cantillo@gmail.com"
              className="text-gray-300 hover:text-white transition"
            >
              Support
            </a>
            <a
              href="https://apps.apple.com/us/app/mommys-log/id6755473620"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              Download App
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Mommy's Log by Lilianne Sperry. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
