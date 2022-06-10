import Navbar from './Navbar'
import Footer from './Footer'
import imglogo from './img/Logo.jpg'
import imglogo1 from './img/Logo.jpg'

const people = [
    {
      name: 'ToysKingdom',
      title: 'CEO ',
      // department: 'Optimization',
      role: 'Owner',
      email: 'ibnumubaroq810@gmail.com',
      image:
        imglogo,
    },
    // More people...
  ]

export default function Example() {
    return (
        <>
        <Navbar />

        <div className="flex flex-row mt-5">
              <div className="relative px-5">
                <img src={imglogo1} width="10000px" height="10000px" className="" />
              </div>
                <div className="text-justify relative px-10 mt-9 ">
                  <span className="text-stone-500">
                  Toys Kingdom merupakan toko retail mainan anak yang berdiri sejak 2010. Pertama kali beroperasi di Grand Indonesia, saat ini Toys Kingdom telah beroperasi di seluruh Indonesia dengan jumlah 58 toko. 



Kami hadir untuk menjawab kebutuhan anak dan orang-tua atas mainan anak dan memberikan fasilitas kemudahan berbelanja secara offline dan online, kapanpun dan dimanapun Anda menginginkannya. 



Kami berusaha membantu Anda dalam bertransaksi dan yang praktis melalui berbagai kategori mainan anak yang lengkap, eksklusif, berkualitas premium dengan harga yang kompetitif. 



Selain itu, kami juga memberikan fasilitas cicilan 0% yang bisa Anda nikmati melalui kerja sama dengan berbagai kartu kredit terkemuka. 



Selain dapat dijangkau secara offline, Toys Kingdom berkomitmen untuk memberikan pengalaman belanja online yang aman dan nyaman menggunakan teknologi e-commerce dari Ruparupa.com dengan jaminan orisinalitas untuk semua produk yang kami jual, transaksi dengan proses yang cepat dan mudah, fasilitas penukaran dan pengembalian produk, garansi resmi dari produsen mainan Internasional terkemuka seperti LEGO, HASBRO, MATTEL, ZURU, FISHER-PRICE, Takara Tomy, dan lainnya. 



Untuk kemudahan Anda, Toys Kingdom juga menghadirkan fitur pengambilan langsung di beberapa pick up point yang berlokasi di berbagai tempat strategis di Indonesia serta beragam pilihan fasilitas pembayaran yang lengkap, mudah dan aman. 



Toys Kingdom merupakan bagian dari Kawan Lama Group yang telah berpengalaman sejak 1950 dalam bisnis retail dan membawahi sejumlah anak perusahaan antara lain Ace Hardware, Informa Furnishings RupaRupa.com dan lainnya. 



Selamat menikmati pengalaman berbelanja yang menyenangkan hanya di Toys Kingdom.
                
                  <br />
                  <br />
                  
                  
                  </span>
                </div>
            </div>

                          
            <div className="text-justify relative px-5 mt-3 text-stone-500">
                <span >
                Nilai utama Toys Kingdom Happiness Comes First Mengutamakan kebahagiaan MIsi dan Visi Toys Kingdom




A place of joy, inspiration and imagination where happiness is delivered with smiles

Pusat keceriaan inspirasi dan imajinasi dimana kebahagiaan dapat tercipta dengan penuh senyuman. 


                
                </span>
            </div>
            

            <div className="flex flex-col mt-5 mb-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 ">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2  inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500 ">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


        <Footer />
        </>
    )
}