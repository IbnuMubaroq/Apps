import Navbar from './Navbar'
import Footer from './Footer'



const products = [
    {
      id: "1",
      name: 'Actio Figure Monkey D Luffy',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/56/ec/60/56ec60216939678da8da63adcbd0709a.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$100',
      
    },
    // More products...
    {
      id: 1,
      name: 'Actio Figure Portgas D. Ace',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/fe/a6/d2/fea6d2e42bd2ed0bc1e6fd29d07781c2.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$100',
      
    },
    // More products...
    {
      id: 1,
      name: 'Actio Figure Kaido',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/47/74/a2/4774a20dcc194918607c33c506220ed8.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      
    },
    {
      id: 1,
      name: 'Actio Figure Roronoa Zoro',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/37/30/a3/3730a3cc13006b907b72af504ad9d840.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$75',
  
    },
    {
      id: 1,
      name: 'Actio Figure Vinsmoke Sanji ',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/f6/36/08/f636082a684a9790fabaca6193c93345.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$70',
      
    },
    {
      id: 1,
      name: 'Actio Figure Sabo',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/f9/ff/98/f9ff98fc6644b78eb50fe04447c2a780.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65',
      
    },
    {
      id: 1,
      name: 'Actio Figure Donquixote Doflamingo',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/1c/8b/90/1c8b9045d7b6c68640c6195745b29921.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$40',
      
    },
    {
      id: 1,
      name: 'Actio Figure Boa Hancock',
      href: '#',
      imageSrc: "https://i.pinimg.com/564x/85/6c/22/856c22a71263df4babd49302d0b21558.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$50',
      
    },
    // More products...
  ]

  export default function Example() {
    return (
        <>
        <Navbar/>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Existing items</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      </>
    )
  }