import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer text-neutral-content p-10 m-auto w-[1000px] pl-48">
    <nav>
      <h6 className="footer-title">ҮНДСЭН</h6>
      <a href='/' className="link link-hover">Эхлэл</a>
      <a href='/comingsoon' className="link link-hover">Тун удахгүй</a>
      <a href='/hutulbur' className="link link-hover">Хөтөлбөр</a>
      <a href='/uilchilgee' className="link link-hover">Үйлчилгээ</a>
      <a href='/bonus' className="link link-hover">Бонус карт</a>
    </nav>
    <nav>
      <h6 className="footer-title">ХОЛБООС</h6>
      <a href='https://www.facebook.com/urgoocinema' target='_blank' className="link link-hover">Facebook</a>
      <a href='https://www.instagram.com/urgoocinemas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' className="link link-hover">Instagram</a>
      <a href='https://www.youtube.com/c/UrgooCinemaUlaanbaatar/featured' target='_blank' className="link link-hover">Youtube</a>
    </nav>
    <nav>
      <h6 className="footer-title">ТУСЛАХ ЦЭС</h6>
      <a className="link link-hover">Салбар</a>
      <a href='/bonus' className="link link-hover">Бонус карт</a>
      <a className="link link-hover">Урамшуулал</a>
      <a className="link link-hover">Үйлчилгээний нөхцөл</a>
    </nav>
  </footer>
  );
}
