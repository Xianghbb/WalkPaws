import SearchBar from './SearchBar'

export default function HeroSection() {
  return (
    <div className="px-6 py-10 md:px-10 lg:px-20">
      <div className="@container">
        <div
          className="flex min-h-[500px] flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-6 items-center justify-center text-center shadow-soft md:p-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCpyoS6jIg6sTTVUyhMnXHzOv0ts7nvGr1y-Jl_46-O2JpVSJOYYYei96evzGOldV56LSGUEZlTU4nl1DJR8yYqSeobIegIudWGwgQve3_rxyxlfz8x86F-MmjWnEmfLaziadJZNo_BfQ6UEd4Jb-28md9oZPhjMaJhb8wKMKrgW2OIVUN1w8MnTiQY3hQX92N6XynDMZ42wfSbDnFiy3Pt2rsFVMxlOPo4KOJfKHgA8vfvZGoXwkWm8xgKF_WLnjXVSJyM1Jd-Kwg")`
          }}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Find trusted dog walkers in Adelaide.
            </h1>
            <p className="text-white/90 text-base font-normal leading-normal md:text-lg">
              Connect with local, vetted walkers in your neighborhood for safe and happy walks.
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}