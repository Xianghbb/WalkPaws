export default function FeatureSection() {
  const features = [
    {
      icon: 'shield',
      title: 'Safe & Vetted',
      description: 'Every walker on WalkPaws is background-checked and thoroughly vetted for your pet\'s safety.'
    },
    {
      icon: 'map',
      title: 'Truly Local',
      description: 'Discover and connect with experienced dog walkers right in your own neighborhood.'
    },
    {
      icon: 'star',
      title: 'Trusted by Owners',
      description: 'Join a community of happy pet owners who rely on our trusted, 5-star rated walkers.'
    }
  ]

  return (
    <div className="flex flex-col gap-10 px-6 py-10 md:px-10 lg:px-20 @container">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Peace of mind with every walk
        </h2>
        <p className="text-subtle-light dark:text-subtle-dark max-w-2xl text-base font-normal leading-normal">
          We ensure every walker is reliable, experienced, and loves pets as much as you do.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col gap-4 rounded-xl border border-black/5 bg-gray-50 p-6 shadow-soft dark:border-white/10 dark:bg-background-dark"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}