import React from 'react';
import './Header.css';
function Header() {
  return (  <div className='header'>
      <div className='header-all-row'>
      <div>
        <img src='https://parilka.store/img_optimize/logo-header_160_120.webp' className='logo'></img>
      </div>
      <div class="social-web">
      <div className='work-time'>
        <ul>
          <li className='city-name'>Мы находимся в г.Астана</li>
          <li>📍E-753,4 Пн-Вс 13:00 - 24:00</li>
          <li>📍Сыганак, 54 Пн-Вс 10:00 - 20:00</li>
          <li>📍Айтеке-би, 9 Пн-Вс 10:00 - 23:00</li>
        </ul>
        </div>
        <div class="header-row-top">
        <div className='header-email'>
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"className="inst"></img>
        <a class="header-email" href="https://instagram.com/elfbar__dymidym?igshid=YmMyMTA2M2Y=">elfbar__dymidym</a>
        </div>
        </div>
        <div class="header-row-top-phone text-center">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXUExURQAAADAwMEBAQDAwMDg4ODAwMDU1NTQ0NDg4ODMzMzY2NjU1NTc3Nzc3NzY2NjY2NjU1NTU1NTc3NzU1NTc3NzU1NTY2NjU1NTU1NTY2NjU1NTY2NjY2Nso1M8YAAAAcdFJOUwAQECAgMDBAQFBfYG9wf4CPkJCfn6Cvv8/f7+8UPm2EAAAAyUlEQVQoz22RQXbCMAwFx40hgEkMLcSW8+9/zi6StCaONl6MpPc1BrikkjoOapSk+XwI4tdT1kwFqQeS0p4kDQDOlreqWQ6AazNk8uvWdLytM9125KoM8NSrSb00T00ACJodBJmjzT0BWY+G+FkD9GoiQJDOEI/QYi1KI3B5TVXHtKHcvyXp50+vy7IOgkkqMVhlfkU+5m8P3qr/WtFW78qiS5r/NXjpI6Eem4f7p/lBsiXwaX+bN8lunRuLYqPDJEktAEIqJfXAL/AKEElsmZMmAAAAAElFTkSuQmCC" class="ico-phone"></img>
        <span class="header-phone"><a href="tel:+77770790707">+7 777 079 07 07</a></span>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Header;

{/* <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 header-item hedaer-item-mail">
<div class="header-timework text-center header-row-bottom">
Пн - Вс 11:00-20:30
</div>
<div class="header-row-top">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAMAAADJPRQhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjUExURQAAADAwMEBAQDAwMDg4ODU1NTQ0NDg4ODMzMzY2NjY2NjU1NTU1NTc3Nzc3NzY2NjU1NTU1NTc3NzU1NTc3NzU1NTY2NjQ0NDY2NjY2NjU1NTU1NTY2NjY2NjU1NTY2NjY2Njq9938AAAAgdFJOUwAQECAgMEBAUFBfYG9vcICPkJCfn6Cgr6+wv8/P3+/vHMKtVwAAAOJJREFUGBltwQFSgzAURdEX8httQbAFsQY/3v2v0mRaRoueoyq056s71fqZz6eom/C6sjMGFdEhd89mqppD6jJ4kPSGmx6ZM0oRTHsGQT2M2pug1xW4Bv0W3oFJC73jUT+i4y2LHDPHT9q8rLgZLpBshpxUPWWYGwkEKloHH4fJYT2pAIEqG5xqHRpVINBd6oYu6Q4E+g/IMf1luBYOKkLaBBWJRTOtijObSUXLh3omFSlvjire6BX4itqLYNKMRz2KziQpOOQuHYIqs2OXwU1FmNlZL41urL3kZaVyv17aRsU3u3IbM+aSSpcAAAAASUVORK5CYII=" class="ico-envelope">
<a class="header-email" href="mailto:parilka.vs@gmail.com">parilka.vs@gmail.com</a>
</div>
<div class="header-row-top-phone text-center">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXUExURQAAADAwMEBAQDAwMDg4ODAwMDU1NTQ0NDg4ODMzMzY2NjU1NTc3Nzc3NzY2NjY2NjU1NTU1NTc3NzU1NTc3NzU1NTY2NjU1NTU1NTY2NjU1NTY2NjY2Nso1M8YAAAAcdFJOUwAQECAgMDBAQFBfYG9wf4CPkJCfn6Cvv8/f7+8UPm2EAAAAyUlEQVQoz22RQXbCMAwFx40hgEkMLcSW8+9/zi6StCaONl6MpPc1BrikkjoOapSk+XwI4tdT1kwFqQeS0p4kDQDOlreqWQ6AazNk8uvWdLytM9125KoM8NSrSb00T00ACJodBJmjzT0BWY+G+FkD9GoiQJDOEI/QYi1KI3B5TVXHtKHcvyXp50+vy7IOgkkqMVhlfkU+5m8P3qr/WtFW78qiS5r/NXjpI6Eem4f7p/lBsiXwaX+bN8lunRuLYqPDJEktAEIqJfXAL/AKEElsmZMmAAAAAElFTkSuQmCC" class="ico-phone">
<span class="header-phone"><a href="tel:+77765557595">+7 776 555 75 95</a></span>
</div>
</div> */}
<a class="header-email" href="mailto:parilka.vs@gmail.com">parilka.vs@gmail.com</a>