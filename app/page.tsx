import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-10">
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/next.svg"}
          alt={"image"}
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Exploring Next.js: Key Concepts and Tools
        </h1>
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Introduction
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Welcome to Next.js
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Brief introduction to Next.js
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Why it’s popular for building web applications?
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Objective of the presentation: to introduce key concepts like
              routing, components, and styling
            </li>
          </ul>
        </div>
      </div>

      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/file.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            The page.tsx File
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            What is page.tsx?
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Purpose: Holds the main content and structure for a page in
              Next.js
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Located in the pages directory; each file represents a route
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Automatically routes to / or /[filename]
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/globe.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            The layout.tsx File
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            What is layout.tsx?
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Used for wrapping page components in a consistent layout across
              multiple pages (e.g., headers, footers)
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Reduces code repetition and keeps layouts organized
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Located in the app or pages folder, depending on the Next.js
              version
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/window.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            The Link Tag
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            What is the Link Tag?
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Explanation of Link in Next.js (next/link)
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Purpose: Enables client-side navigation, making page transitions
              smoother and faster
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Helps improve user experience and SEO by handling internal routing
              effectively
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto bg-black"
          src={"/vercel.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Components in Next.js
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            What are Components?
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Components are reusable building blocks of code
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Purpose: Encourage code modularity, reusability, and scalability
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Breaks down complex UIs into smaller, manageable pieces
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/file.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Styling in Next.js
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Styling in Next.js
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Next.js supports CSS Modules, Sass, and global CSS
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Applying CSS: Import CSS files directly into components, or use
              scoped styles with CSS Modules
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Encourages maintaining styles close to components
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/globe.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Introduction to Tailwind CSS
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            What is Tailwind CSS?
          </h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>A
              utility-first CSS framework that allows rapid UI development
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Uses predefined classes for styling directly in the HTML/JSX,
              avoiding separate CSS files for smaller styling needs
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Benefits: Highly customizable, reduces CSS bloat, and simplifies
              styling with a consistent design system
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/window.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Tailwind CSS vs. Standard CSS
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Tailwind CSS vs. Standard CSS
          </h3>
          <h4 className="text-xl font-medium text-gray-700 mb-4">
            Tailwind CSS:
          </h4>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Utility classes like flex, bg-color, etc.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Allows rapid prototyping directly in HTML/JSX
            </li>
            <h4 className="text-xl font-medium text-gray-700 mb-4">
              Standard CSS:
            </h4>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Uses traditional CSS rules, selectors, and separate files
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              More control over complex animations and specific styling
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto bg-black"
          src={"/vercel.svg"}
          alt={"image"}
          width={300}
          height={300}
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Summary and Takeaways
          </h2>
          <h3 className="text-xl font-medium text-gray-700 mb-4">Summary</h3>
          <ul className="list-none text-lg text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Recap main points: purpose of page.tsx and layout.tsx, benefits of
              Link, importance of components, and styling options
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Emphasize how these features help streamline development in
              Next.js
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              Encourage experimenting with Tailwind CSS and components to
              understand how they work together
            </li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 max-w-3xl text-center bg-white p-10 shadow-lg rounded-lg">
        <Image
          className="m-8 p-8 mx-auto"
          src={"/next.svg"}
          alt={"image"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
