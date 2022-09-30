import React from 'react'
import s from './about_us.module.css';

export default function About_us() {
  return (
    <div className={s.main}>
        <div className={s.content}>
            <div className={s.text}>
                <h2><span>WE ARE<br /></span>CREATIVE</h2>
                <div className={s.content_txt}>
                    <p>Curabitur aliquet, metus quis ornare semper, magna nibh tincidunt ante, et congue lectus dui vitae enim. Aliquam id accumsan erat. Mauris vitae sem vel nulla facilisis consequat. Sed sed felis posuere, ullamcorper orci id, fringilla ipsum. Integer dapibus tellus sit amet lorem efficitur, nec varius dolor volutpat. Donec nisl lacus, tempor quis augue a, lacinia condimentum diam. Nam iaculis quam vel enim faucibus, eget tincidunt felis interdum.</p>
                    <p className={s.scnd_txt}>Fusce ac molestie mi. Fusce at lacinia erat. Nam sodales blandit ornare. Suspendisse erat eros, dignissim nec mattis at, imperdiet et urna. Curabitur consectetur justo ut iaculis tempor. Mauris vitae lacus et arcu ultrices ullamcorper.</p>
                </div>
                <div className={s.line}></div>            
            </div>
            <img src="http://demo.qodearena.com/projects/anticahtml/img/home_first/about.jpg" alt="" />
        </div>
        <div className={s.bg_rect}></div>
        <div className={s.bg_about}>BOUT</div>
        <div className={s.bg_creative}>CREATIV</div>
    </div>
  )
}
