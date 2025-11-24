export default function Footer() {
  const footerLinks = [
    'About Us',
    'Careers',
    'Contact',
    'FAQ',
    'Terms of Service',
    'Privacy Policy'
  ]

  const socialIcons = [
    {
      name: 'Instagram',
      path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.752 2.752c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.197 1.791-.444 2.427a4.902 4.902 0 01-2.752 2.752c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.046-1.791-.197-2.427-.444a4.902 4.902 0 01-2.752-2.752c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.197-1.791.444-2.427a4.902 4.902 0 012.752-2.752c.636-.247 1.363-.398 2.427-.444C9.531 2.013 9.885 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z',
      viewBox: '0 0 24 24'
    },
    {
      name: 'Facebook',
      path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
      viewBox: '0 0 24 24'
    },
    {
      name: 'Twitter',
      path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
      viewBox: '0 0 24 24'
    }
  ]

  return (
    <footer className="flex flex-col gap-8 border-t border-black/5 px-6 py-10 text-center dark:border-white/10 md:px-10 lg:px-20">
      <div className="grid grid-cols-2 gap-6 text-left sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:text-center">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-subtle-light dark:text-subtle-dark min-w-40 text-sm font-normal leading-normal hover:text-primary transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox={icon.viewBox}
            >
              <path clipRule="evenodd" fillRule="evenodd" d={icon.path} />
            </svg>
          </a>
        ))}
      </div>
      <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
        © 2024 WalkPaws. All rights reserved.
      </p>
    </footer>
  )
}