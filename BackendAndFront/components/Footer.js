import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer text-neutral-content p-10 mx-auto w-full sm:w-[1000px] flex flex-col sm:flex-row sm:space-x-16 sm:justify-between">
      {/* Main Section */}
      <nav className="flex flex-col mb-10 sm:mb-0">
        <h6 className="footer-title text-lg font-semibold mb-3">ҮНДСЭН</h6>
        <Link href='/'>
          <span className="link link-hover mb-2">Эхлэл</span>
        </Link>
        <Link href='/comingsoon'>
          <span className="link link-hover mb-2">Тун удахгүй</span>
        </Link>
        <Link href='/hutulbur'>
          <span className="link link-hover mb-2">Хөтөлбөр</span>
        </Link>
        <Link href='/uilchilgee'>
          <span className="link link-hover mb-2">Үйлчилгээ</span>
        </Link>
        <Link href='/bonus'>
          <span className="link link-hover mb-2">Бонус карт</span>
        </Link>
      </nav>

      {/* Social Media Links */}
      <nav className="flex flex-col mb-10 sm:mb-0">
        <h6 className="footer-title text-lg font-semibold mb-3">ХОЛБООС</h6>
        <a href='https://www.facebook.com/urgoocinema' target='_blank' className="link link-hover mb-2">Facebook</a>
        <a href='https://www.instagram.com/urgoocinemas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' className="link link-hover mb-2">Instagram</a>
        <a href='https://www.youtube.com/c/UrgooCinemaUlaanbaatar/featured' target='_blank' className="link link-hover mb-2">Youtube</a>
      </nav>

      {/* Additional Information */}
      <nav className="flex flex-col">
        <h6 className="footer-title text-lg font-semibold mb-3">ТУСЛАХ ЦЭС</h6>
        <span className="link link-hover mb-2">Салбар</span>
        <Link href='/bonus'>
          <span className="link link-hover mb-2">Бонус карт</span>
        </Link>
        <span className="link link-hover mb-2">Урамшуулал</span>
        <span className="link link-hover mb-2">Үйлчилгээний нөхцөл</span>
      </nav>
    </footer>
  );
}
