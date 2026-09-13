import logo from './assets/logo-text.png';
export function Fotter() {
    
    return (
        <>
        <footer className="border-t border-slate-100 mt-25 mb-10">
      <div className="mx-auto container m-auto pt-20">
        
        <div className="grid  gap-12 grid-cols-[1.8fr_1fr_1fr_1fr]">
          
          
          <div>
            <img src={logo} alt="" />

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-700 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-900">
              COMPANY
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold  tracking-wide text-slate-900">
              LEGAL
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 transition hover:text-slate-900"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-14 border-t border-slate-100 pt-7">
          <div className="flex flex-row gap-4 text-sm  items-center justify-between">
            
            <p className="text-slate-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-7">
              <a
                href="#"
                className="text-slate-400 transition hover:text-slate-900"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-slate-400 transition hover:text-slate-900"
              >
                Terms
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
        </>
    )
}