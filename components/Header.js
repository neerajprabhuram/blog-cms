import Link from 'next/link'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Dev', slug: 'web-dev' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-gray-500 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white ">
              Graph CMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span
                className="mt-2 ml-4 cursor-pointer align-middle font-semibold 
                hover:text-white hover:underline hover:underline-offset-4 md:float-right"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default Header
